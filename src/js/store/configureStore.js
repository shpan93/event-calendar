import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer, routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {combineReducers} from 'redux';
import {DataReducer} from '../reducers';
import createLogger from 'redux-logger';
import {INITIAL_STATE} from '../constants/InitialState';


const reducer = combineReducers({
    routing: routerReducer,
    data: DataReducer
});


export default function configureStore(baseHistory, initialState = INITIAL_STATE) {
    const routingMiddleware = routerMiddleware(baseHistory);
    const logger = createLogger();
    const middleware = applyMiddleware(routingMiddleware, thunk, logger);
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    const store = createStore(reducer, initialState, compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    const history = syncHistoryWithStore(baseHistory, store)

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
        );
    }

    return {store, history};
}
