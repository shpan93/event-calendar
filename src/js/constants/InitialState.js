import moment from 'moment';
import {createDay} from '../utils/index';
export const INITIAL_STATE = {
    data: {
        isNewTaskWidgetOpened:false,
        today: createDay(moment().set({hour:0, minute:0,second:0})),
        displayed: createDay(),
        selectedDay: createDay(),
        events: [
            {
                "description": "Fighting versus Joker",
                "author":'Bruce Wayne',
                "day": '30-08-2016',
                "startDate": '15:30',
                "endDate":'17:30',
                cuid:'1234'
            },
            {
                "description": "Meeting with CatWoman",
                "author":'Bruce Wayne',
                "day": '01-09-2016',
                "startDate": '10:30',
                "endDate":'13:30',
                cuid:'12345'
            }

        ]
    }

}