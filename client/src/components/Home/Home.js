import ThreadList from '../ThreadList/ThreadList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React, { Component } from 'react'
import './pure.css'
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          {Header}
          {ThreadList}
          {Footer}
        </div>
      </div>
    )
  }
}
