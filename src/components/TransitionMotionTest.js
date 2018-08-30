import React, { Component } from 'react'
import { Transition } from 'react-spring'

class TransitionTest extends Component {
  state = {
    items: [
      { key: 'a', text: '1' },
      { key: 'b', text: '2' },
      { key: 'c', text: '3' }
    ]
  }
  handleClick = () => {
    this.setState(state => ({
      items:
        state.items.length === 3
          ? state.items.slice(0, state.items.length - 1)
          : state.items.concat({ key: 'c', text: '3' })
    }))
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'black'
        }}
      >
        <Transition
          keys={this.state.items.map(item => item.key)}
          from={{ opacity: 0, fontSize: 0 }}
          enter={{ opacity: 1, fontSize: 48 }}
          leave={{ opacity: 0, fontSize: 0 }}
          config={{ tension: 260, friction: 60 }}
        >
          {this.state.items.map(item => styles => (
            <div style={{...styles, height: '100%'}}>{item.text}</div>
          ))}
        </Transition>
      </div>
    )
  }
}

export default TransitionTest
