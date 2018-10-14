import Header from '../Header/Component.js'
import ThreadList from '../ThreadList/Container.js'
import React, { Component } from 'react'
import './pure.css'
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ThreadList />
      </div>
    );
  }
}
