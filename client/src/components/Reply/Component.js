import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Reply extends Component {
  render() {
    const { text, id } = this.props;

    return (
    <div className="reply">
      <span className="textReply"> {text} </span>
      <a className="report" href={"/reportcomment/" + id}><strong>report</strong></a>
    </div>
    )
  }
}

Reply.propTypes = {
  text: PropTypes.string.isRequired,
  id:   PropTypes.string.isRequired,
}

export default Reply;
