import React, { Component } from 'react'
import { Transition, Spring, animated } from 'react-spring'
import bgImage from '../assets/codeBG.png'
import samplesArray from '../hardCoded/smaples'
import Sample from '../components/Sample'
import { interpolate } from 'flubber'
import { defaultStyle, secondaryStyle } from '../styles/styles'
import { upArrowPath, downArrowPath } from '../hardCoded/paths'
import ShowMore from './ShowMore'

class SamplesContainer extends Component {
  state = {
    showAllSamples: false,
    samples: samplesArray.slice(0, 1),
    activeId: ''
  }
  handleShowAllClick = () => {
    this.setState(state => ({
      showAllSamples: !state.showAllSamples,
      samples:
        state.samples.length === 1 ? samplesArray : samplesArray.slice(0, 1)
    }))
  }
  handleMouseEnter = id => {
    this.setState(state => ({
      activeId: id
    }))
  }
  handleMouseLeave = () => {
    this.setState({
      activeId: ''
    })
  }
  render() {
    const interpolator = interpolate(upArrowPath, downArrowPath)

    return (
      <Spring
        to={{
          t: this.state.showAllSamples ? 0 : 1
        }}
      >
        {({ t }) => (
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed'
            }}
          >
            <h1
              style={{
                ...defaultStyle,
                ...secondaryStyle,
                background: `rgba(255, 255, 255, 0.2)`,
                fontSize: '3rem',
                textAlign: 'center',
                margin: 0
              }}
            >
              Projects
            </h1>
            <ShowMore
              interpolator={interpolator}
              t={t}
              text={this.state.showAllSamples ? ' Show Less' : 'Show More'}
              handleShowAllClick={this.handleShowAllClick}
            />
            <Transition
              native
              keys={this.state.samples.map(sample => sample.id)}
              config={{ tension: 300, friction: 50 }}
              from={{
                opacity: 0,
                maxHeight: 0,
                scale: this.state.showAllSamples ? 0 : 1
              }}
              leave={{ opacity: 0, maxHeight: 0, scale: 0 }}
              enter={{ opacity: 1, maxHeight: 600, scale: 1 }}
            >
              {this.state.samples.map((sample, i) => styles => (
                <animated.div
                  style={{
                    ...styles,
                    transform: `scaleY(${styles.scale})`,
                    WebkitTransform: `scaleY(${styles.scale})`,
                    MsTransform: `scaleY(${styles.scale})`
                  }}
                  onMouseEnter={() => this.handleMouseEnter(sample.id)}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <Sample
                    {...sample}
                    active={this.state.activeId === sample.id}
                    onSamples={this.state.activeId}
                  />
                  {this.state.samples.length - 1 !== i && (
                    <div style={{ height: '35px' }} />
                  )}
                </animated.div>
              ))}
            </Transition>
            <ShowMore
              interpolator={interpolator}
              t={t}
              text={this.state.showAllSamples ? ' Show Less' : 'Show More'}
              handleShowAllClick={this.handleShowAllClick}
            />
          </div>
        )}
      </Spring>
    )
  }
}
export default SamplesContainer
