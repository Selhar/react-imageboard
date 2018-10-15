import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReplyList from '../ReplyList/Component'
import './style.css'

class Thread extends Component {

  render() {
    const { thread } = this.props;
    return (
    <div className="thread">
      <span className="thread_title">
      <strong>{thread.title}</strong>
      <a className="thread_link" href={ "/TODO" }>view</a> |
      <a className="report" href={ "/TODO/" }><strong>report</strong></a></span>
      <span className="thread_text"> {thread.text}</span>

      <ReplyList replies={thread.replies} />

      <form method="POST" action='/api/reply' name='reply'>
        <input value={thread._id} name="thread_id" type="hidden" />
        <textarea type='text' rows="8" placeholder='Text' name='text'></textarea><br />
        <input type='text' name='password' placeholder='password'/><br />
        <input type="submit" value="Reply" />
      </form>
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
