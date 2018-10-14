import ThreadList from '../ThreadList/Component'
import Header from '../Header/Component'
import Footer from '../Footer/Component'
import React, { Component } from 'react'
import './pure.css'
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        {Header}
        <main className="pure-g">
          {ThreadList}
        </main>
        {Footer}
      </div>
    )
  }
}
