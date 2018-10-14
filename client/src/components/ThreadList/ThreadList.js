import Thread from '../Thread/Thread';
import './ThreadList.css';
import PropTypes from 'prop-types'
import React from 'react'
import cuid from 'cuid';

const ThreadList = ({ threads }) => {
  return (
    <div className="pure-u-1-2 container">
      <div className="threadlist">
        {threads.map((title, text) =>
          <Thread text={text} title={title} key={cuid()} />
        )}
      </div>
    </div>
  )
}

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
}

export default ThreadList
