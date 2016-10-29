import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import document from 'global/document'

import me from './me.jpg'
import './style.css'

class ProfilePhoto extends Component {
  constructor () {
    super()

    this.state = {
      imgLoaded: false
    }

    const img = document.createElement('img')
    img.src = me
    img.onload = () => {
      this.setState({imgLoaded: true})
    }
  }

  render () {
    const { imgLoaded } = this.state

    return (
      <Motion style={{
        scale: spring(imgLoaded ? 1 : 0.6),
        opacity: spring(imgLoaded ? 1 : 0.5)
      }}>
        {({ scale, slideDown, opacity }) => {
          return (
            <img src={me}
              className='profile-photo'
              alt='jack hanford'
              style={{ transform: `scale(${scale})`, opacity }}
            />
          )
        }}
      </Motion>
    )
  }
}

export default ProfilePhoto
