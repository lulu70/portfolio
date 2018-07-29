import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import outernLogo from '../assets/logo/logo_outern_frame.png'
import innerLogo from '../assets/logo/logo_inner_frame.png'
import { relative } from 'path'

class HeaderLogo extends Component {
  state = {
    size: 'tiny',
    style: {
      transition: ' all 0.8s ease-out'
    }
  }
  handleMouseEntersLogo = () => {
    this.setState({
      ...this.state,
      size: 'medium',
      style: {
        ...this.state.style,
        animation: 'shake 0.6s cubic-bezier(.36,.07,.19,.97) both',
        animationDelay: '0.8s',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }
    })
  }
  handleMouseLeavesLogo = () => {
    this.setState({
      ...this.state,
      size: 'tiny',
      style: {
        transition: ' all 0.8s ease-out'
      }
    })
  }
  render() {
    return (
      <div
        style={{ position: relative }}
        onMouseEnter={this.handleMouseEntersLogo}
        onMouseLeave={this.handleMouseLeavesLogo}
      >
        <Image
          src={outernLogo}
          size={this.state.size}
          style={{
            transition: ' all 0.8s ease-out',
            position: 'absolute'
          }}
        />
        <Image
          src={innerLogo}
          size={this.state.size}
          style={this.state.style}
        />
      </div>
    )
  }
}

export default HeaderLogo
