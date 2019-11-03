import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } from '../../constants';
import {load} from 'redux-localstorage-simple';

let TASKS = load({namespace: 'calendar-items-list'});
if (!TASKS || !TASKS.tasks || !TASKS.tasks.length){
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, {type, id, date, lid, time, text, isCompleted}) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          date,
          lid,
          time,
          text,
          isCompleted,
        }
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETED_TASK:
      return [...state].map(task => {
        if(task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
}
export default tasks;
