import React, { Component } from 'react'
import parseGithubEvent from 'parse-github-event'

class Activity extends Component {
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

    return (
      <div>
        {
          activity
            ? activity.map(d => <div>{d}</div>)
            : null
        }
      </div>
    )
  }
}

export default Activity
