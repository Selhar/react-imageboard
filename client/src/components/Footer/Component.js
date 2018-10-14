import React, { Component } from 'react'
import './style.css'

export default class Home extends Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/Selhar" rel="noopener noreferrer" target="_blank">
            <span class="icon"><i class="fa fa-github"></i></span>
        </a>
        <a href="http://codepen.io/Selhar/#" rel="noopener noreferrer" target="_blank">
            <span class="icon"><i class="fa fa-codepen"></i></span>
        </a>
        <a href="https://www.freecodecamp.com/selhar1" rel="noopener noreferrer" target="_blank">
            <span class="icon"><i class="fa fa-free-code-camp"></i></span>
        </a>
      </footer>
    )
  }
}
