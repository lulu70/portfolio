import React, { Component } from 'react'
import { TimelineMax } from 'gsap/TweenMax'
import uuid from 'uuid'
import _ from 'lodash'

const style = {
  width: '100px',
  height: '100px',
  background: 'red',
  border: 'solid 1px white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

const items = _.times(10, i => ({
  name: i + 1,
  id: uuid.v4(),
  style: {
    ...style,
    color: `hsl(${_.random(0, 360)}, 100%, 50%)`,
    background: `hsl(${_.random(0, 360)}, 100%, 50%)`
  },
  ref: React.createRef()
}))

class GsapTest extends Component {
  state = {
    clicked: false,
    items,
    mouseX: null,
    mouseY: null
  }

  componentDidMount = () => {
    const tl = new TimelineMax({ repeat: -1, yoyo: true })
    const refs = this.state.items.map(item => item.ref.current)
    tl.staggerTo(refs,0.5, {rotationX:45, scaleX:0.8, z:-300}, 1)
    // tl.staggerTo(refs, 1, {  scale: 1}, 0.01)
  }

  render() {
    const { items } = this.state
    return (
      <div
        onClick={this.handleClick}
        style={{
          width: '20%',
          height: '100%',
          // background: 'black',
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
          left: 0, 
          top: 50
        }}
      >
        {items.map((item, i) => (
          <div ref={item.ref} key={item.id} style={item.style}>
            {item.name}
          </div>
        ))}
      </div>
    )
  }
}

export default GsapTest
