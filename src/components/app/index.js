import React, { Component } from 'react'

import ProfilePhoto from '../profile-photo'
import Divider from '../divider'
import Intro from '../intro'
import Programming from '../programming'
// import GithubActivity from '../github-activity'
import Social from '../social'
import SideProjects from '../side-projects'
import SnapModal from '../snap-modal'

import './app.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      showSnapModal: false
    }

    this.toggleSnapModal = this.toggleSnapModal.bind(this)
  }

  toggleSnapModal () {
    const {
      showSnapModal
    } = this.state

    this.setState({
      showSnapModal: !showSnapModal
    })

    console.log(this.state.showSnapModal)
  }

  render() {
    const {
      showSnapModal
    } = this.state

    return (
      <div className='app'>
        <Social
          toggleSnapModal={this.toggleSnapModal}
          showSnapModal={showSnapModal}
        />
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
        <SnapModal toggleSnapModal={this.toggleSnapModal} showSnapModal={showSnapModal} />
      </div>
    )
  }
}

export default App
