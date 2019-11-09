import { TOGGLE_CALENDAR } from '../../constants.js';

const INITIAL_STATE = {calendarOpened: true};

const interfaces = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CALENDAR:
      return {
        ...state,
        calendarOpened: !state.calendarOpened
      }
    default:
      return state
  }
}

export default interfaces;
