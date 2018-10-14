import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Thread.css';

class Thread extends Component {

  render() {
    const { thread } = this.props;

    return (
    <div className="thread">
    </div>
    )
  }
}

Thread.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Thread;
