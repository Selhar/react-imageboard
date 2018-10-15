import Reply from '../Reply/Component';
import './style.css';
import PropTypes from 'prop-types'
import React from 'react'
import cuid from 'cuid';

const ReplyList = ({ replies }) => {
  return (
    <div className="replies">
      {replies.map((text, id) => {
        <Reply text={text} id={id} keys={cuid()} />
      })}
    </div>
  )
}

ReplyList.propTypes = {
  replies: PropTypes.array.isRequired,
}

export default ReplyList
