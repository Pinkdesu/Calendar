import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';
import './style.css';

const TasksList = ({ tasksList, removeTask, completedTask, taskPanelOpened  }) => (
  <ol className="todo-list" style={{display: taskPanelOpened ? "none" : "block"}}>
    {tasksList.map(({ id, text, lid, time, isCompleted }) => (
      <TaskItem removeTask={removeTask}
                completedTask={completedTask}
                id={id}
                key={id}
                text={text}
                lid={lid}
                time={time}
                isCompleted={isCompleted}
      />
    ))}
  </ol>
);

TasksList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completedTask: PropTypes.func,
  taskPanelOpened: PropTypes.bool
}

TasksList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completedTask: () => {},
  taskPanelOpened: false
}

export default TasksList;
