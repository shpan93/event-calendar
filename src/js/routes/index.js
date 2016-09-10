import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Root, MonthView} from '../pages';

export default(

        <Route name="Root" path='/' component={Root}>
            <IndexRoute name="MonthView"   component={MonthView}/>
        </Route>

);