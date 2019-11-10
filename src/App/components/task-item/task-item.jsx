import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.css';


class TaskItem extends Component{
  state = {
    isCollapsed: true
  }

  handleClick = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  render(){
    const { isCollapsed } = this.state;
    const { id, text, lid, time, isCompleted, removeTask, completedTask } = this.props;
    return(
      <li className="todo-item">
        <div className="todo-item-header">
          <i onClick={() => completedTask(id)} className={isCompleted ? 'mark far fa-check-circle cursor-pointer' : 'mark far fa-circle cursor-pointer'}></i>
          <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
          <div className="double-icon-bar">
            <i onClick={this.handleClick} className={isCollapsed ? 'fas fa-angle-down mark cursor-pointer' : 'fas fa-angle-up mark cursor-pointer'}></i>
            <i onClick={() => removeTask(id)} className='fas fa-times cursor-pointer'></i>
          </div>
        </div>
        {isCollapsed && 
          <div className="todo-item-main">
            <span className="item-lid">{lid}</span>
            <span className="item-time">Время: {time}</span>
          </div>
        }
      </li>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completedTask: PropTypes.func
}

TaskItem.defaultProps = {
  id:  '',
  text: '',
  date: moment().format("L"),
  time: moment().format("LTS"),
  isCompleted: false,
  removeTask: () => {},
  completedTask: () => {}
}

export default TaskItem;
