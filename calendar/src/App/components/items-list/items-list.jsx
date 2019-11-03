import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import Item from '../item/item';
import PopupItem from '../popup-item/popup-item';
import Zoom from 'react-reveal/Zoom';
import './style.css';

class ItemsList extends Component {
  state = {
    currentDateObject: moment(),
    todaysDateObject: moment()
  }

  generateDatesArray = () => {
    const { currentDateObject, todaysDateObject } = this.state;
    const firstDay = currentDateObject
                        .clone()
                        .startOf("month");
    let dateObjectsArray = [];

    for  (let i = firstDay.format("E") - 1; i > 0; i--)
    {
      dateObjectsArray.push({
        dayObj: firstDay.clone().subtract(i, 'd'),
        isThisMonth: false,
        isCurrentDay: false
      });
    }

    for  (let i = 0; dateObjectsArray.length < 42; i++)
    {
      let tempDate = firstDay
                        .clone()
                        .add(i, 'd');

      dateObjectsArray.push({
        dayObj: tempDate,
        isThisMonth: tempDate.isSame(firstDay, 'month'),
        isCurrentDay: tempDate.isSame(todaysDateObject, 'day')
      });
    }

    return dateObjectsArray;
  }

  backToCurrentMonth = () => {
    this.setState({
      currentDateObject: this.state.todaysDateObject
    });
  }

  upcFirstCharacter = (str) => 
    str[0].toUpperCase() + str.slice(1);
  
  changeMonth = (value) => {
    let newDateObject = this.state.currentDateObject
                          .clone()
                          .add(value, 'months')
    this.setState({
      currentDateObject: newDateObject 
    });
  }

  render(){
    const { windowDayOpened } = this.props;
    const { currentDateObject, todaysDateObject} = this.state;
    const blanks = this.generateDatesArray();
    return (
      <main className="main-wrapper">

        <div className="header">
          <div className="today-head">
            <span onClick={this.backToCurrentMonth}>{todaysDateObject.format("LL")}</span>
          </div>
          <div className="monday-col">Пн</div>
          <div className="tuesday-col">Вт</div>
          <div className="wednesday-col">Ср</div>
          <div className="thursday-col">Чт</div>
          <div className="friday-col">Пт</div>
          <div className="saturday-col">Сб</div>
          <div className="sunday-col">Вс</div>
        </div>

        <div className="middle-cont">
          {blanks.map(({ dayObj, isThisMonth, isCurrentDay }) => (
              <Item
                key={dayObj.format("L")}
                dayObj={dayObj}
                isThisMonth={isThisMonth}
                isCurrentDay={isCurrentDay}
              />
          ))}
        </div>

        <div className="bottom-panel">
          <button className="prev-but cursor-pointer" onClick={() => this.changeMonth(-1)}>
            <i className="fas fa-angle-left"></i>
            <span className="prev-button-text">
              {
                this.upcFirstCharacter(
                currentDateObject
                                .clone()
                                .subtract(1, 'months')
                                .format("MMMM")
                    )}
            </span>
          </button>
          <span className="date-span">{this.upcFirstCharacter(currentDateObject.format("MMMM YYYY"))}</span>
          <button className="next-but cursor-pointer" onClick={() => this.changeMonth(1)}>
            <i className="fas fa-angle-right"></i>
            <span className="next-button-text">
              {
                this.upcFirstCharacter(
                  currentDateObject
                                .clone()
                                .add(1, 'months')
                                .format("MMMM")
                    )}
            </span>
          </button>
        </div>

        <Zoom appear={true} when={windowDayOpened} duration={500}>
          <PopupItem windowDayOpened={windowDayOpened} upcFirstCharacter={this.upcFirstCharacter}/> 
        </Zoom>
        
      </main>
  );
 }
}

const mapStateToProps = state => {
  return {
    windowDayOpened: state.windowDay.windowDayOpened,
  }
}

export default connect(mapStateToProps)(ItemsList);
