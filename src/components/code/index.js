import React from 'react'

import Title from '../title'
import Activity from './activity'

export default () => {
  return (
    <div>
      <Title content='Programming' />
      <div>Over the passed few years I've worked at a handful of start ups. I'm currently working as a Senior Software Engineer at <a href='https://eazeup.com' target='_blank'>Eaze</a>. Lately one of my hobbies has been writing open source software, which I keep over <a href='https://github.com/hanford'>here</a>. I've been writing JavaScript profressionally for around 3 years, and have become obssessed with some of the latest and greatest front end frameworks including, virtual-dom, AngularJS, ReactJS.</div>
      <br />
      <Activity />
    </div>
  )
}
