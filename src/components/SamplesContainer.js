import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import { Transition } from 'react-spring'
import bgImage from '../assets/codeBG.png'
import samplesArray from '../hardCoded/smaples'

class SamplesContainer extends Component {
  state = {
    showAllSamples: false,
    samples: samplesArray.slice(0, 1)
  }
  handleShowAllClick = () => {
    this.setState(state => ({
      showAllSamples: !state.showAllSamples,
      samples:
        state.samples.length === 1 ? samplesArray : samplesArray.slice(0, 1)
    }))
  }
  render() {
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
            background: `rgba(255, 255, 255, 0.2)`,
            fontSize: '3rem',
            textAlign: 'center'
          }}
          className="secondary-color"
        >
          Projects
        </h1>
        <div style={{ textAlign: 'right' }}>
          <Label
            as="a"
            size="big"
            style={{
              color: '#6fef99',
              background: 'rgba(0,0,0,0)'
            }}
            onClick={this.handleShowAllClick}
          >
            {this.state.showAllSamples
              ? ' Show Less Projects...'
              : 'Show All Projects...'}
          </Label>
        </div>
        <Transition
          keys={this.state.samples.map((sample, i) => i)}
          // config={{ tension: 180, friction: 26 }}
          from={{ opacity: 0, maxHeight: 0 }}
          leave={{ opacity: 0, maxHeight: 0 }}
          enter={{ opacity: 1, maxHeight: 1000 }}
        >
          {this.state.samples.map(sample => styles => (
            <div style={{ ...styles }}>{sample}</div>
          ))}
        </Transition>
      </div>
    )
  }
}
export default SamplesContainer
