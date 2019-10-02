import React, { Component } from 'react'
import { Spring } from 'react-spring'
import bgImage from '../assets/bg.jpg'
import samplesArray from '../hardCoded/smaples'
import Sample from '../components/Sample'
import { interpolate } from 'flubber'
import { defaultStyle, secondaryStyle } from '../styles/styles'
import { upArrowPath, downArrowPath } from '../hardCoded/paths'
import ShowMore from './ShowMore'

class SamplesContainer extends Component {
  state = {
    showAllSamples: true,
    samples: samplesArray,
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
            {this.state.samples.map((sample, i) => (
              <React.Fragment key={sample.id}>
                <Sample
                  {...sample}
                  active={this.state.activeId === sample.id}
                  onSamples={this.state.activeId}
                />
                {this.state.samples.length - 1 !== i && (
                  <div style={{ height: '35px' }} />
                )}
              </React.Fragment>
            ))}
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
