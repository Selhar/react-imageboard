import ThreadList from '../ThreadList/ThreadList'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <main>
        <div class="inputfield">
          <h3>Submit a new thread:</h3>
            <form method="POST" action="/" name='thread'>
              <input type='text' placeholder='Subject' name='title'></input>
              <textarea type='text' placeholder='Text' name='text'></textarea>
              <input type='text' placeholder='Password' name='password'></input>
              <input type="submit" value="Post" />
            </form>
        </div>
        {ThreadList}
      </main>
    )
  }
}
