import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleTaskPanel, addTask, removeTask, completedTask, changeFilter } from '../../actions/actionCreator';
import TasksList from '../../components/tasks-list/tasks-list';
import Footer from '../../components/footer/footer';
import Zoom from 'react-reveal/Zoom';
import './style.css';

class TaskPanel extends Component{
  state = {
    taskText: '',
    taskTime: '12:00',
    taskLid: '',
    tasksCount: 0,
  }
  
  inputTextRef = React.createRef();
  inputTimeRef = React.createRef();
  inputLidRef = React.createRef();

  handleChange = () => {
    this.setState({
      taskText: this.inputTextRef.current.value,
      taskTime: this.inputTimeRef.current.value,
      taskLid: this.inputLidRef.current.value
    });
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
          return tasks;
    }
  }

  getActiveTasksCounter = tasks => 
    tasks.filter(task => !task.isCompleted).length;

  handleButtonClick = () => {
    const { taskText, taskTime, taskLid, tasksCount } = this.state;
    if (taskText.length > 3) {
      const { addTask, toggleTaskPanel, dateObj } = this.props;

      addTask(`${dateObj.format("L")}-${tasksCount}`, taskText, dateObj.clone(), taskLid, taskTime, false);

      this.setState({
        taskText: '',
        taskTime: '12:00',
        taskLid: '',
        tasksCount: this.state.tasksCount + 1
      });

      toggleTaskPanel();
    }
  }

  render() {
    const { taskText, taskTime, taskLid } = this.state;
    const { dateObj, currentDay, toggleTaskPanel, removeTask, completedTask, changeFilter, tasks, filters, taskPanelOpened } = this.props;
    const currentTasksList = tasks.filter(task => dateObj.isSame(task.date, 'day'));
    const isTasksExist = currentTasksList && currentTasksList.length > 0;
    const filtredTasks = this.filterTasks(currentTasksList, filters);
    const taskCounter = this.getActiveTasksCounter(currentTasksList);

    return(
      <div className="task-panel-wrapper">
        {
          dateObj.isSameOrAfter(currentDay, 'day') ? 
          <div className={taskPanelOpened ? "open-panel opened" : "open-panel"}>
            <div className="open-panel-head">
              <span>{taskPanelOpened ? "Скрыть" : "Добавить задачу"}</span>
              <i onClick={toggleTaskPanel} className={ taskPanelOpened ? "fas fa-minus cursor-pointer" : "fas fa-plus cursor-pointer"}></i>
            </div>
            { taskPanelOpened ? 
              <Zoom duration={400}> 
                <div className="task-panel-main">
                  <label for="task-name">Название события:</label>
                  <input ref={this.inputTextRef} id="task-name" type="text" value={taskText} onChange={this.handleChange}/>
                  <label for="task-lid">Описание события:</label>
                  <textarea ref={this.inputLidRef} id="task-lid" value={taskLid} onChange={this.handleChange}></textarea>
                  <label for="task-time">Время напоминания:</label>
                  <input ref={this.inputTimeRef} id="task-time" type="time" value={taskTime} onChange={this.handleChange}/>
                  <button onClick={this.handleButtonClick}>Добавить событие</button>
                </div>
              </Zoom>
              : null } 
          </div> : null}
        {isTasksExist && <TasksList tasksList={filtredTasks} 
                                    removeTask={removeTask} 
                                    completedTask={completedTask} 
                                    taskPanelOpened={taskPanelOpened}/>}
        
        {isTasksExist && <Footer changeFilter={changeFilter} 
                                  amount={taskCounter} 
                                  activeFilter={filters} 
                                  taskPanelOpened={taskPanelOpened}/>}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filters: state.filters,
    taskPanelOpened: state.taskPanel.taskPanelOpened,
    dateObj: state.currentDay.dateObj,
    currentDay: state.currentDay.currentDay
  }
}

export default connect(mapStateToProps, { addTask, removeTask, completedTask, changeFilter, toggleTaskPanel })(TaskPanel);