import { CURRENT_DAY } from '../../constants.js';
import moment from 'moment';

const INITIAL_STATE = {
  dateObj: moment(),
  currentDay: moment()
}

const currentDay = (state = INITIAL_STATE, {type, dateObj}) => {
  switch (type) {
    case CURRENT_DAY:
      return {
        ...state,
        dateObj,
      }
    default:
      return state
  }
}

export default currentDay;
