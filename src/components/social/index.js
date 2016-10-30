import React from 'react'

import Title from '../title'
import Divider from '../divider'
import './style.css'

export default () => {
  return (
    <div>
      <div className='styleRow'>
        <Title content='Where to find me' noMargin />
        <div>
          <a href='https://twitter.com/jackhanford' target='_blank' className='icon'>
            <i className='ion-social-twitter-outline'></i>
          </a>
          <i className='icon ion-social-snapchat-outline'></i>
          <a href='https://www.linkedin.com/in/jack-hanford-98352761' target='_blank' className='icon'>
            <i className='ion-social-linkedin-outline'></i>
          </a>
          <a href='https://github.com/hanford' target='_blank' className='icon'>
            <i className='ion-social-github-outline'></i>
          </a>
          <a href='https://www.instagram.com/jackhanford/' target='_blank' className='icon'>
            <i className='ion-social-instagram-outline'></i>
          </a>
          <a href='https://facebook.com/jackhanford' target='_blank' className='icon'>
            <i className='ion-social-facebook-outline'></i>
          </a>
          <a href='mailto:hello@jackhanford.com' target='_blank'>
            <i className='icon ion-ios-email-outline'></i>
          </a>
        </div>
      </div>
      <Divider />
    </div>
  )
}
