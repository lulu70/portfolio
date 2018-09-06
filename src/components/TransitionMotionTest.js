import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import _ from 'lodash'
import uuid from 'uuid'

const Layer = ({ background, left, offset = 1.1, speed = 0.6 }) => (
  <ParallaxLayer offset={offset} speed={speed}>
    <div
      style={{
        width: '20px',
        height: '20px',
        position: 'absolute',
        background,
        left,
        borderRadius: '50%'
      }}
    />
  </ParallaxLayer>
)

class TransitionTest extends Component {
  state = {
    to: 1,
    layers: []
  }

  parallaxRef = React.createRef()

  handleClick = () => {
    this.parallaxRef.current.scrollTo(this.state.to)
    const layers = _.times(21, i => (
      <Layer
        key={uuid.v4()}
        background={`hsl(${_.random(0, 360)} 100% 50%)`}
        left={i * 70}
        offset={_.random(1, 2, true)}
        speed={_.random(0, 1, true)}
      />
    ))
    this.setState(state => ({
      to: state.to === 1 ? 0 : (state.to += 1),
      layers
    }))
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onClick={this.handleClick}>
        <Parallax
          pages={2}
          style={{ height: '100vh' }}
          ref={this.parallaxRef}
          scrolling={false}
        >
          {this.state.layers.map(layer => layer)}
        </Parallax>
      </div>
    )
  }
}

export default TransitionTest
