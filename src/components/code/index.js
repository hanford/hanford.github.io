import React, { Component } from 'react'
import parseGithubEvent from 'parse-github-event'

import Title from '../title'

class Code extends Component {
  constructor () {
    super()

    this.fetchActivity = async function () {
      return fetch('https://api.github.com/users/hanford/events')
    }

    this.state = {
      activity: []
    }
  }

  componentWillMount () {
    this.fetchActivity()
      .then(res => res.json())
      .then(data => {
        let events = []

        for (let event in data) {
          let compiled = parseGithubEvent.compile(data[event])
          events.push(compiled)
        }

        this.setState({activity: events.slice(0, 10)})
      })
  }

  render () {
    const {
      activity
    } = this.state

    console.log(activity)

    return (
      <div>
        <Title content='Programming' />
        <div>Over the passed few years I've worked at a handful of start ups. I'm currently working as a Senior Software Engineer at <a href='https://eazeup.com' target='_blank'>Eaze</a>. Lately one of my hobbies has been writing open source software, which I keep over <a href='https://github.com/hanford'>here</a>. I've been writing JavaScript profressionally for around 3 years, and have become obssessed with some of the latest and greatest front end frameworks including, virtual-dom, AngularJS, ReactJS.</div>
        <br />

        {
          activity
            ? activity.map(d => <div>{d}</div>)
            : null
        }
      </div>
    )
  }
}

export default Code
