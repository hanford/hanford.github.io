import React from 'react'
import { Motion, spring, presets } from 'react-motion'
import { Tooltip } from '@blueprintjs/core'

import Title from '../title'
import Divider from '../divider'
import links from './social.json'
import Stagger from '../stagger'
import './style.css'

export default ({ toggleSnapModal }) => {
  return (
    <div className='styleRow'>
      {
        links
          .map((data, index) => {
            return (
              <Stagger key={index} initial={0} value={1} period={index * 150}>
                {delayed =>
                  <Motion style={{scaleIn: spring(delayed), bumpDown: spring(delayed ? 0 : -100, presets.wobbly)}}>
                    {val =>
                      <Tooltip content={data.title}>
                        <a href={data.link} target='_blank' className='icon' key={index} style={{
                          transform: `scale(${val.scaleIn}) translateY(${val.bumpDown}px)`
                        }}>
                          {
                            data.snapchat
                            ? <div onClick={toggleSnapModal}><i className={data.icon}></i></div>
                            : <i className={data.icon}></i>
                          }
                        </a>
                      </Tooltip>
                    }
                  </Motion>
                }
              </Stagger>
            )
          })
      }
    </div>
  )
}

