import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {toggleCalendar} from './actions/actionCreator';
import Header from './components/header/header';
import ItemsList from './components/items-list/items-list';
import './style.css';

class Calendar extends Component {
  render() {
    const {calendarOpened, toggleCalendar} = this.props;
    return (
      <Fragment>
        {calendarOpened ? (
        <div className="calendar-wrapper">
            <Header />
            <ItemsList />
        </div>) :
        <i className="fas fa-calendar-alt cursor-pointer" onClick={toggleCalendar}></i>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    calendarOpened: state.interfaces.calendarOpened
  }
}

export default connect(mapStateToProps, {toggleCalendar})(Calendar);
