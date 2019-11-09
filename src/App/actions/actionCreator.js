import { TOGGLE_CALENDAR, TOGGLE_DAY, TOGGLE_TASK_PANEL, ADD_TASK, REMOVE_TASK, COMPLETED_TASK, CHANGE_FILTER, CURRENT_DAY } from '../../constants';

export const toggleCalendar = () => ({ type: TOGGLE_CALENDAR });
export const toggleTaskPanel = () => ({ type: TOGGLE_TASK_PANEL });
export const toggleWindowDay = () => ({ type: TOGGLE_DAY });

export const currentDay = (dateObj, currentDay) => ({
  type: CURRENT_DAY,
  dateObj,
  currentDay
});

export const addTask = (id, text, date, lid, time, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  date,
  lid,
  time,
  isCompleted
});

export const removeTask = id =>({
  type: REMOVE_TASK,
  id
});

export const completedTask = id =>({
  type: COMPLETED_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});
