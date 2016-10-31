import React from 'react'
import { Motion, spring } from 'react-motion'

import Title from '../title'
import Divider from '../divider'
import links from './social.json'
import Stagger from '../stagger'
import './style.css'

export default () => {
  return (
    <div>
      <div className='styleRow'>
        <Title content='Where to find me' noMargin />
        <div>
          {
            links
              .map((data, index) => {
                return (
                  <Stagger key={index} initial={0} value={1} period={index * 150}>
                    {delayed =>
                      <Motion style={{scaleIn: spring(delayed), bumpDown: spring(delayed ? 0 : -100)}}>
                        {val =>
                          <a href={data.link} target='_blank' className='icon' key={index} style={{
                            transform: `scale(${val.scaleIn}) translateY(${val.bumpDown}px)`
                          }}>
                            <i className={data.icon}></i>
                          </a>
                        }
                      </Motion>
                    }
                  </Stagger>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}
