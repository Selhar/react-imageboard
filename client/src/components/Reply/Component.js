import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Reply = ({ text }) => {
  return (
    <div className="reply">
      <span className="textReply"> {text} </span>
      <a className="report" href={"/TODO/"}>
        <strong>report</strong>
      </a>
    </div>
  )
}

Reply.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Reply;
