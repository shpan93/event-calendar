import expect from 'expect'
import * as actions from '../index'
import * as types from '../../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add an event', () => {
    const event =  {
      "description": "Meeting with CatWoman",
      "author":'Bruce Wayne',
      "day": '01-09-2016',
      "startDate": '10:30',
      "endDate":'13:30',
      "cuid":"12345"
    };
    const expectedAction = {
      type: types.ADD_EVENT,
      event
    };
    expect(actions.addEvent(event)).toEqual(expectedAction)
  })
});

describe('showAddTaskWidget', () => {
  it('should show widget with AddTask component', () => {

    const expectedAction = {
      type: types.TOGGLE_ADD_TASK,
      payload:true
    };
    expect(actions.showAddTaskWidget()).toEqual(expectedAction)
  })
});
describe('hideAddTaskWidget', () => {
  it('should hide widget with AddTask component', () => {

    const expectedAction = {
      type: types.TOGGLE_ADD_TASK,
      payload:false
    };
    expect(actions.hideAddTaskWidget()).toEqual(expectedAction)
  })
});