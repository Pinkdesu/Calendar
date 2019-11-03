import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {toggleWindowDay, toggleTaskPanel} from '../../actions/actionCreator';
import CloseIcon from '../svg-components/close-icon';
import TaskPanel from '../task-panel/task-panel';
import './style.css';



class PopupItem extends Component{
  handleClick = () => {
    const { taskPanelOpened, toggleTaskPanel, toggleWindowDay } = this.props;
    if(taskPanelOpened)
      toggleTaskPanel();
    toggleWindowDay();
  }

  render() {
    const { dateObj, upcFirstCharacter, windowDayOpened } = this.props;
    const popupItemStyle = {visibility: windowDayOpened ? 'visible' : 'hidden'}
    return(
      <div style={popupItemStyle} className="popup-div">
        <div className="popup-div-header">
          <i onClick={this.handleClick} class="fas fa-times cursor-pointer"></i>

          <span className="number-place">
            {upcFirstCharacter(dateObj.format("dd[,] D"))}
          </span>

          <span className="text-place">
            {dateObj.format("MMMM YYYY")}
          </span>
        </div>

        <TaskPanel />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    taskPanelOpened: state.taskPanel.taskPanelOpened,
    dateObj: state.currentDay.dateObj
  }
}
export default connect(mapStateToProps, { toggleWindowDay, toggleTaskPanel })(PopupItem);
