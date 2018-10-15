import Reply from '../Reply/Component';
import './style.css';
import PropTypes from 'prop-types'
import React from 'react'
import cuid from 'cuid';

const ReplyList = ({ replies }) => {

  return (
    <div className="replies">
      {replies.map((reply) =>
        <Reply text={reply.text} key={cuid()} />
      )}
    </div>
  )
}

ReplyList.propTypes = {
  replies: PropTypes.array.isRequired,
}

export default ReplyList
