import React, { Component } from 'react'
import compile from './parse-event'
import { Motion, spring } from 'react-motion'

import Title from '../title'
import Stagger from '../stagger'
import Divider from '../divider'

class Activity extends Component {
  constructor () {
    super()

    this.fetchActivity = async function () {
      return fetch('https://api.github.com/users/hanford/events')
    }

    this.state = {
      activity: []
    }

    this.staggerAndReveal = this.staggerAndReveal.bind(this)
  }

  componentWillMount () {
    this.fetchActivity()
      .then(res => res.json())
      .then(data => {
        let events = []

        for (let event in data) {
          let compiled = compile(data[event])

          events.push(compiled)
        }

        this.setState({activity: events.slice(0, 10)})
      })
  }

  staggerAndReveal (activity) {
    return activity.map((data, index) => {
      return (
        <Stagger key={index} initial={0} value={1} period={index * 80}>
          {delayed =>
            <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(delayed)}}>
              {val =>
                <div style={{opacity: val.opacity}}>
                  <div>{data}</div>
                </div>
              }
            </Motion>
          }
        </Stagger>
      )
    })
  }

  render () {
    const {
      activity
    } = this.state

    if (!activity.length) return <div />

    return (
      <div>
        <Divider />
        <Title content='Github Activity' />
        { this.staggerAndReveal(activity) }
      </div>
    )
  }
}

export default Activity
