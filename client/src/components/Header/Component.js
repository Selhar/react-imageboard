import React, { Component } from 'react'
import './style.css'
import '../../vendor/font-awesome-4.7.0/css/font-awesome.min.css'

export default class Header extends Component {
  render() {
    return (
      <div className="inputfield">
        <div className="icons">
          <a href="https://github.com/Selhar" rel="noopener noreferrer" target="_blank">
              <span className="icon"><i className="fa fa-github"></i></span>
          </a>
          <a href="http://codepen.io/Selhar/#" rel="noopener noreferrer" target="_blank">
              <span className="icon"><i className="fa fa-codepen"></i></span>
          </a>
          <a href="https://www.freecodecamp.com/selhar1" rel="noopener noreferrer" target="_blank">
              <span className="icon"><i className="fa fa-free-code-camp"></i></span>
          </a>
        </div>

        <h3>Submit a new thread:</h3>
        <form method="POST" action="/api/thread" name='thread'>
          <input type='text' placeholder='Subject' name='title'></input>
          <textarea type='text' placeholder='Text' name='text'></textarea>
          <input type='Password' placeholder='Password' name='password'></input>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}
