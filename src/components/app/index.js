import React, { Component } from 'react'

import ProfilePhoto from '../profile-photo'
import Divider from '../divider'
import Intro from '../intro'
import Programming from '../programming'
// import GithubActivity from '../github-activity'
import Social from '../social'
import SideProjects from '../side-projects'

import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Social />
        <div className='body'>
          <div className='top-section'>
            <ProfilePhoto />
            <Intro />
          </div>
          <Divider />
          <div class='bottom-section'>
            <Programming />
            <Divider />
            <SideProjects />
          </div>
        </div>
      </div>
    )
  }
}

export default App
