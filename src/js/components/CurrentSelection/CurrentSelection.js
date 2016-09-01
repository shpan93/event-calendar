import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import moment from 'moment';
import {dateFormat, hourFormat,durationFormat} from '../../constants/index'
import Chip from 'material-ui/Chip';
import  "moment-duration-format";
import cuid from 'cuid';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
class CurrentSelection extends Component {
    // static propTypes = {
    //     autoPlay: React.PropTypes.bool.isRequired,
    //     maxLoops: React.PropTypes.number.isRequired,
    //     posterFrameSrc: React.PropTypes.string.isRequired,
    //     videoSrc: React.PropTypes.string.isRequired,
    // }


    constructor(props) {
        super(props);
        // this.state = {
        //     matchedEvents: this.getMatchedEvents(this.props.selectedDay,this.props.events)
        // }


    }

    componentDidUpdate(prevProps, prevState){
        // if(prevProps.selectedDay !== this.props.selectedDay){
        //     this.setState({
        //         matchedEvents: this.getMatchedEvents(this.props.selectedDay,this.props.events)
        //     })
        // }
    }
    getMatchedEvents(day, events){
        return  events.filter(event => (
            event.day == day.date.format(dateFormat)
        )).sort((a, b) => (
            (moment(a.startDate,'HHmm').isBefore(moment(b.startDate,'HHmm')) ? -1 : 1)
        ));

    }
    render() {

        let  matchedEvents = this.getMatchedEvents(this.props.selectedDay,this.props.events);


        return (

            <div className="widget current-selection">

                    <header>
                        <p>
                            {this.props.selectedDay.date.format('dddd')}
                        </p>
                        <p>
                            {this.props.selectedDay.date.format('MMMM Do YYYY')}
                        </p>

                    </header>
                {  matchedEvents.length > 0 &&
                (
                        <h6 className="h--orange">Events list</h6>
                    )
                }
                {
                    matchedEvents.length > 0 && (
                        <div className="widget-wr" data-expanded="true">

                            <ul className="event-list">

                                {matchedEvents.map((event) =>{
                                    const {startDate, endDate} = event;

                                    const diff = moment(endDate,hourFormat).diff(moment(startDate,hourFormat));
                                    const difference =  moment.duration(diff).format("h[h], m[m]");



                                    return ( <li key={cuid()}>
                                            <div className="time-range">
                                                <p>{startDate}</p>
                                                <p className="diff">{difference}</p>
                                                <p>{endDate}</p>

                                            </div>

                                            <div className="right">
                                                <p className="desc">
                                                    <span className="title">Description:</span> {event.description}</p>
                                                <p className="author">
                                                    <span className="title">Author:</span> {event.author}
                                                </p>
                                            </div>

                                            <div className="btn-holder">
                                                <FloatingActionButton
                                                    className="remove-task"
                                                    mini={true}
                                                    onClick={()=>this.props.actions.removeEvent(event.cuid)}>
                                                    <RemoveIcon/>
                                                </FloatingActionButton>
                                            </div>

                                        </li>
                                    )
                                })}

                            </ul>
                        </div>

                    )
                }

                </div>



        );
    }
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(state => state.data, mapDispatch)(CurrentSelection);