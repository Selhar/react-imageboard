import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReplyList from '../ReplyList/Component'
import './style.css'

class Thread extends Component {

  render() {
    const { title, text, id, replies } = this.props;

    return (
    <div className="thread">
      <span className="thread_title">
      <strong>{title}</strong>
      <a className="thread_link" href={ "/" + id }>view</a> |
      <a className="report" href={ "/report/" + id }>"><strong>report</strong></a></span>
      <span className="thread_text"> {text}</span>
      <ReplyList replies={replies} />
    </div>
    )
  }
}

Thread.propTypes = {
  title:    PropTypes.string.isRequired,
  text:     PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
}

export default Thread;
