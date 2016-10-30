import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

import './style.css'

class Intro extends Component {
  render () {
    return (
      <div  className='about-me'>
        <h2>
          Jack Hanford
          😎
        </h2>
        <p>
          I skipped college when I was 18 and moved across the country by myself to pursue a career as a software engineer. Needless to say, it's been an incredible journey filled with very smart people, lots of programming, and more than a few sleepless nights.
        </p>
      </div>
    )
  }
}

export default Intro
