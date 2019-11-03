import React, {Component} from 'react';
import {toggleWindowDay, currentDay} from '../../actions/actionCreator';
import {connect} from 'react-redux';
import './style.css';

class Item extends Component{

  handleClick = () => {
    const {toggleWindowDay, currentDay, dayObj } = this.props;
    currentDay(dayObj);
    toggleWindowDay();
  }

  render() {
    const { dayObj, isThisMonth, isCurrentDay } = this.props;

    return(
      <div className={isThisMonth ? (isCurrentDay ? "cell today cursor-pointer" : "cell cursor-pointer") : "cell last-month cursor-pointer"} onClick={()=>this.handleClick()}>
        <div className="event-div">
          
        </div>
        <span className="date-num">{dayObj.format("D")}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dateObj: state.currentDay.dateObj
  }
}

export default connect(mapStateToProps, {toggleWindowDay, currentDay})(Item);
