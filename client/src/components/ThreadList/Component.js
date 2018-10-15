import Thread from '../Thread/Component';
import './style.css';
import PropTypes from 'prop-types'
import React from 'react'
import cuid from 'cuid';

const ThreadList = ({ threads }) => {
  console.log(threads);
  return (
    <div className="pure-u-1-1 container">
      <div className="threadlist">
        {threads.map((thread) =>
          <Thread thread={thread} key={cuid()} />
        )}
      </div>
    </div>
  )
}

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
}

export default ThreadList
