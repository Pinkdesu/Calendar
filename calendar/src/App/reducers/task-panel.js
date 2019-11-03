import { TOGGLE_TASK_PANEL } from '../../constants.js';

const INITIAL_STATE = {taskPanelOpened: false};

const taskPanel = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_TASK_PANEL:
      return {
        ...state,
        taskPanelOpened: !state.taskPanelOpened
      }
    default:
      return state
  }
}

export default taskPanel;
