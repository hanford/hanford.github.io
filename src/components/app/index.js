import React, { Component } from 'react'

import ProfilePhoto from '../profile-photo'
import Divider from '../divider'
import Intro from '../intro'
import Code from '../code'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='top-section'>
          <ProfilePhoto />
          <Intro />
        </div>
        <Divider />
        <div class='bottom-section'>
          <Code />
        </div>
      </div>
    )
  }
}

export default App
