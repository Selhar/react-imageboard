import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div class="inputfield">
        <h3>Submit a new thread:</h3>
        <form method="POST" action="/" name='thread'>
          <input type='text' placeholder='Subject' name='title'></input>
          <textarea type='text' placeholder='Text' name='text'></textarea>
          <input type='text' placeholder='Password' name='password'></input>
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
}