import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleCalendar, toggleWindowDay} from '../../actions/actionCreator';
import './style.css';

class Header extends Component {
  
  handleClick = () => {
    const {toggleCalendar, toggleWindowDay, windowDayOpened} = this.props;
    if(windowDayOpened)
      toggleWindowDay();
    toggleCalendar();
  }

  render(){

    return(
      <header className="header-wrapper">
        <span className="text-wrapper">Календарь</span>
        <i onClick={this.handleClick} class="fas fa-eye cursor-pointer"></i>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return({
    windowDayOpened: state.windowDay.windowDayOpened
  });
}
export default connect(mapStateToProps, {toggleCalendar, toggleWindowDay})(Header);
