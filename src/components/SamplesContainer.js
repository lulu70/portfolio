import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import { Transition, Spring } from 'react-spring'
import bgImage from '../assets/codeBG.png'
import samplesArray from '../hardCoded/smaples'
import Sample from '../components/Sample'
import { interpolate } from 'flubber'
import { defaultStyle, colors, secondaryStyle } from '../styles/styles'

const upArrowPath =
  'M6.85,154.42l14.27,14.27a9,9,0,0,0,13.13,0L146.46,56.49l112.21,112.2a9,9,0,0,0,13.13,0l14.27-14.28a9,9,0,0,0,0-13.13L153,8.24a9,9,0,0,0-13.13,0l-133,133a9,9,0,0,0,0,13.14Z'
const downArrowPath =
  'M286.08,22.51,271.81,8.24a9,9,0,0,0-13.13,0L146.47,120.44,34.26,8.24a9,9,0,0,0-13.13,0L6.86,22.51a9,9,0,0,0,0,13.14l133,133a9,9,0,0,0,13.13,0l133-133a9,9,0,0,0,0-13.14Z'

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
        <Spring
          to={{
            t: this.state.showAllSamples ? 0 : 1
          }}
        >
          {({ t }) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  paddingTop: '0.5rem',
                  margin: '0.5rem  0.5rem'
                }}
                onClick={this.handleShowAllClick}
              >
                <svg
                  id="Capa_1"
                  data-name="Capa 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 284 166"
                  width="26"
                  height="14"
                >
                  <title>angle-arrow-down</title>
                  <path
                    fill={colors.secondary}
                    d={interpolator(t)}
                    transform="translate(-4 -5.38)"
                  />
                </svg>
                <Label
                  style={{
                    ...secondaryStyle,
                    background: 'rgba(0,0,0,0)'
                  }}
                >
                  {this.state.showAllSamples ? ' Show Less' : 'Show More'}
                </Label>
              </div>
            </div>
          )}
        </Spring>
        <Transition
          keys={this.state.samples.map(sample => sample.id)}
          config={{ tension: 250, friction: 30 }}
          from={{
            opacity: 0,
            maxHeight: 0,
            scale: this.state.showAllSamples ? 0 : 1
          }}
          leave={{ opacity: 0, maxHeight: 0, scale: 0 }}
          enter={{ opacity: 1, maxHeight: 600, scale: 1 }}
        >
          {this.state.samples.map((sample, i) => styles => (
            <div
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
              <div style={{ height: '35px' }} />
            </div>
          ))}
        </Transition>
      </div>
    )
  }
}
export default SamplesContainer
