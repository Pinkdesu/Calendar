import { combineReducers } from "redux";
import windowDay from './window-day';
import interfaces from './interfaces';
import taskPanel from './task-panel';
import tasks from './tasks';
import filters from './filters';
import currentDay from './current-day';
const rootReducer = combineReducers({ windowDay, interfaces, taskPanel, tasks, filters, currentDay });

export default rootReducer;
