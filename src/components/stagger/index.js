import React from 'react'

class Stagger extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: this.props.initial,
      timeout: null
    }
  }

  refresh (props) {
    let {value, period} = props
    this.setState({
      timeout: setTimeout(() => this.setState({
        value
      }), period)
    })
  }

  componentDidMount () {
    this.refresh(this.props)
  }

  componentWillUnmount () {
    clearTimeout(this.state.timeout)
  }

  render () {
    return this.props.children(this.state.value)
  }
}

export default Stagger
