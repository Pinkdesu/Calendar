import { TOGGLE_DAY } from '../../constants.js';

const INITIAL_STATE = {windowDayOpened: false};

const windowDay = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DAY:
      return {
        ...state,
        windowDayOpened: !state.windowDayOpened
      }
    default:
      return state
  }
}

export default windowDay;
