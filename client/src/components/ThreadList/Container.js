import './ThreadList.css'
import React, {Component} from 'react'
import addThreadToState from '../../actions/ThreadListActions'
import {connect} from 'react-redux'
import fetch from 'cross-fetch'
import ThreadList from './Component'
import PropTypes from 'prop-types'

class ThreadListContainer extends Component {
  static propTypes = {
    threads: PropTypes.array.isRequired,
    addThreadToState: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { addThreadToState } = this.props;
      fetch('/threads')
      .then(res => res.json())
      .then(threads => {
        addThreadToState(threads);
      })
  }

  render() {
    const {threads} = this.props;
    return (
      <ThreadList threads={threads} />
    )
  }
}

const mapStateToProps = state => ({
  threads: state.threads.data
})

const mapDispatchToProps = dispatch => {
  return {
    addThreadToState: threads => dispatch(addThreadToState(threads))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadListContainer)
