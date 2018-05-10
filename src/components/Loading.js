import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Loading extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  static defaultProps = {
    text: 'Loading',
  }
  state = {
    text: this.props.text
  }
  componentDidMount () {
    const stopper = this.props.text + '...'
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text }))
        : this.setState(({ text }) => ({ text: text + '.' }))
    }, 300)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  render () {
    return (
      <div className='home-container'>
        <h1 className='text-center'>
          {this.state.text}
        </h1>
      </div>
    )
  }
}