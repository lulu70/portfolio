import React from 'react'
import { Spring } from 'react-spring'
import Star from './Star'
import { interpolate } from 'flubber'
// import delay from 'delay'
import paths from '../hardCoded/paths'

class MotionTest extends React.Component {
  state = {
    mouseIn: false,
    mouseX: 0,
    mouseY: 0,
    index: 1,
    visible: true,
    paths,
    lPath: paths.liorLetters.lPath,
    cPath: paths.cohenLetters.cPath
  }

  componentDidMount = () => {
    // this.changeIndex()
  }
  mapRange = (value, valueMin, valueMax, targetMin, targetMax) => {
    value = (value - valueMin) / (valueMax - valueMin)
    return targetMin + value * (targetMax - targetMin)
  }
  handleMouseMove = ({ clientX: mouseX, clientY: mouseY }) => {
    this.setState(() => ({
      mouseX,
      mouseY
    }))
  }

  handleClick = () => {
    this.changeIndex()

    // this.setState(state => ({
    //   wordLetters: Object.keys(paths.cohenLetters).map(
    //     key => paths.cohenLetters[key]
    //   )
    // }))
  }
  handleMouseLeave = () => {
    this.setState(state => ({
      mouseX: 0,
      mouseY: 0
    }))
  }
  changeIndex = () => {
    this.setState(state => ({
      index: state.index === 0 ? 1 : 0
    }))
  }
  handleRest = () => {
    // this.changeIndex()
  }
  render() {
    const { mouseX, mouseY, visible, paths, index, lPath, cPath } = this.state
     const interpolator = interpolate(lPath, cPath)
    // const Container = Keyframes.Spring({
    //   wiggle: async call => {
    //     await call({ from: { x: 0, y: 100, t: 1 }, config: config.slow })
    //     await call({ to: { x: 1000, y: 10, t: 0 }, config: config.slow })
    //     await delay(200)
    //     await call({ to: { t: 1 }, config: config.gentle })
    //   }
    // })
    return (
      <React.Fragment>
        <Spring
          from={{ top: 50, left: 100, color: '#6fef99', t: 1 }}
          to={{
            top: 50,
            left: 10,
            color: '#6fef99',
            t: index,
          }}
          // config={{ tension: 30, friction: 30 }}
          // config={config.gentle}
          // onRest={this.handleRest}
        >
          {styles => (
            <div
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleClick}
            >
              {this.props.children()}
              <React.Fragment>
                <Star {...styles} path={interpolator(styles.t)} />
                {/* <Container state={visible ? 'wiggle' : ''}>
                    {styles => (
                      <Star
                        top={styles.y}
                        left={styles.x}
                        color={1000}
                        path={interpolator(styles.t)}
                      />
                    )}
                  </Container> */}
              </React.Fragment>
            </div>
          )}
        </Spring>
      </React.Fragment>
    )
  }
}

export default MotionTest
