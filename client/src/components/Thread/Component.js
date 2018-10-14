import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Thread extends Component {

  render() {
    const { thread } = this.props;

    return (
    <div className="thread">
      <span className="thread_title">
      <strong>{ thread.title }</strong>
      <a className="thread_link" href={ "/" + thread.id }>view</a> |
      <a className="report" href={ "/report/" + thread._id }>"><strong>report</strong></a></span>
    </div>
    )
  }
}

Thread.propTypes = {
  thread: PropTypes.array.isRequired,
}

export default Thread;
