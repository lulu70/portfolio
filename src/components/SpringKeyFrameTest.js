import React, { Component } from 'react'
import { Keyframes, config } from 'react-spring'
import delay from 'delay'

class SpringKeyFrameTest extends Component {
  render() {
    // You can create keyframes for springs, trails and transitions
    const Container = Keyframes.Spring({
      // Single props
      show: [
        { to: { opacity: 1 } },
        { to: { opacity: 0 } },
        { to: { opacity: 1 } }
      ],
      // Chained animations (arrays)
      showAndHide: [{ to: { opacity: 1 } }, { to: { opacity: 0 } }],
      // Functions with side-effects
      wiggle: async call => {
        await call({ to: { x: 100 }, config: config.wobbly })
        await delay(5000)
        await call({ to: { x: 0 }, config: config.gentle })
      }
    })
    return (
      <Container state="wiggle">
        {styles => <div style={{ opacity: styles.x }}>Hello</div>}
      </Container>
    )
  }
}
export default SpringKeyFrameTest
