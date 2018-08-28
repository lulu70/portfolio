import React from 'react'
// import { Spring, config } from 'react-spring'
import { Motion, spring } from 'react-motion'
import Star from './Star'

class MotionTest extends React.Component {
  state = {
    mouseIn: false,
    mouseX: 0,
    mouseY: 0,
    visible: true
  }
  mapRange = (value, a, b, c, d) => {
    value = (value - a) / (b - a)
    return c + value * (d - c)
  }
  handleMouseMove = ({ clientX: mouseX, clientY: mouseY }) => {
    this.setState(() => ({
      mouseX,
      mouseY
    }))
  }

  handleClick = () => {
    this.setState(state => ({
      visible: !state.visible
    }))
  }
  handleMouseLeave = () => {
    this.setState(state => ({
      mouseX: 0,
      mouseY: 0
    }))
  }
  handleRest = () => {}
  render() {
    const { mouseX, mouseY, visible } = this.state
    const motionPresets = {
      noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
      gentle: { stiffness: 120, damping: 14 },
      wobbly: { stiffness: 180, damping: 12 },
      stiff: { stiffness: 210, damping: 20 }
    }
    return (
      <React.Fragment>
        <Motion
          style={{
            top: spring(mouseY, motionPresets.noWobble),
            left: spring(mouseX, motionPresets.noWobble),
            color: spring(this.mapRange(mouseX, 0, 1050, 30, 90),motionPresets.noWobble)
          }}
        >
          {motion => (
            <div
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleClick}
            >
              {this.props.children()}
              {visible && <Star {...motion} />}
            </div>
          )}
        </Motion>
      </React.Fragment>
    )
  }
}

export default MotionTest
