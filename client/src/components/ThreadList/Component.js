import Thread from '../Thread/Component';
import './style.css';
import PropTypes from 'prop-types'
import React from 'react'
import cuid from 'cuid';

const ThreadList = ({ threads }) => {
  return (
    <div className="pure-u-1-2 container">
      <div className="threadlist">
        {threads.map((thread) =>
          <Thread text={thread.text} title={thread.title} id={thread._id} replies={thread.replies} key={cuid()} />
        )}
      </div>
    </div>
  )
}

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
}

export default ThreadList
