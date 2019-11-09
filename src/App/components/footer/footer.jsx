import React from 'react';
import PropTypes from 'prop-types';
import {FILTERS_BTN} from '../../../constants';
import './style.css';

const Footer = ({ changeFilter, amount, activeFilter, taskPanelOpened }) => (
  <div className="footer" style={{display: taskPanelOpened ? "none" : "flex"}}>
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {changeFilter(id)}}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  changeFilter: PropTypes.func,
  activeFilter: PropTypes.string,
  taskPanelOpened: PropTypes.bool,
}

Footer.defaultProps = {
  amount: 0,
  changeFilter: () => {},
  activeFilter: 'all',
  taskPanelOpened: false
}

export default Footer;
