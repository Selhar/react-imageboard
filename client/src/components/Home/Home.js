import BookListContainer from '../BookList/BookListContainer'
import React, { Component } from 'react'
import cuid from 'cuid';
import './pure.css'
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          {lists}
        </div>
      </div>
    )
  }
}
