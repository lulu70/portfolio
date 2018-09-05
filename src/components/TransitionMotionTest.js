import React, { Component } from 'react'
import { Transition, Trail } from 'react-spring'

class TransitionTest extends Component {
  state = {
    clicked: false,
    x: 0,
    y: 0,
    items: [
      { key: 'a', text: '1', color: 'red', size: 50 },
      { key: 'b', text: '2', color: 'green', size: 50 },
      { key: 'c', text: '3', color: 'blue', size: 50 }
    ]
  }
  handleClick = () => {
    // this.setState(state => ({
    //   items:
    //     state.items.length === 3
    //       ? state.items.slice(0, state.items.length - 1)
    //       : state.items.concat({ key: 'c', text: '3' })
    // }))
    this.setState(state => ({
      clicked: !state.clicked
    }))
  }
  handleMouseMove = ({ clientX: x, clientY: y }) => {
    this.setState(() => ({
      x,
      y
    }))
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black'
        }}
      >
        {/* <Transition
          keys={this.state.items.map(item => item.key)}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ tension: 100, friction: 60 }}
        >
          {this.state.items.map(item => styles => (
            <div
              style={{
                ...styles,
                background: item.color,
                width: item.size,
                height: item.size
              }}
            >
              {item.text}
            </div>
          ))}
        </Transition> */}
        <Trail
          keys={this.state.items.map(item => item.key)}
          from={{ opacity: 0, x: 0 }}
          to={
            this.state.clicked ? { opacity: 1, x: this.state.x } : { opacity: 0, x: 0 }
          }
          config={{ tension: 200, friction: 20 }}
          onRest={this.handleClick}
        >
          {this.state.items.map(item => styles => (
            <div
              style={{
                opacity: styles.opacity,
                left: `translateX(${styles.x}px)`,
                background: item.color,
                width: item.size,
                height: item.size
              }}
            >
              {item.text}
            </div>
          ))}
        </Trail>
      </div>
    )
  }
}

export default TransitionTest
