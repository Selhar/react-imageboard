import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Thread extends Component {

  render() {
    const { title, text, password, id } = this.props;

    return (
    <div className="thread">
      <span className="thread_title">
      <strong>{title}</strong>
      <a className="thread_link" href={ "/" + id }>view</a> |
      <a className="report" href={ "/report/" + id }>"><strong>report</strong></a></span>
    </div>
    )
  }
}

Thread.propTypes = {
  title:    PropTypes.string.isRequired,
  text:     PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
}

export default Thread;
