import React from 'react'

import Title from '../title'
import style from './style.css'

export default () => {
  return (
    <div>
      <Title content='Side projects' />
      <div className='project'>
        <h5>Veneer</h5>
        <p>
           A chrome extension allowing you to modify the CSS on any given website with 0 config. Built using vanilla JavaScript and CodeMirror.
        </p>
      </div>
      <div className='project'>
        <h5>Facebook data visualizer</h5>
        <p>
           A node script that parses data downloaded from facebook, which then used AngularJS and d3 to display
           the data on interactive graphs. Some of the graphs include usuage by hour, weekday, month and year. I also did a 
           sentiment analysis on all messages showing you which friends made you happiest and which friends made you saddest.
        </p>
      </div>
      <div className='project'>
        <h5>MobileGit</h5>
        <p>
           A fully functional mobile github app built using AngularJS, Ionic and Cordova to achieve a very native feel/asesthetic.
        </p>
      </div>
    </div>
  )
}
