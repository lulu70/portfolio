import React, { Component } from 'react'
import { Label, Divider } from 'semantic-ui-react'
import { Transition } from 'react-spring'
import bgImage from '../assets/codeBG.png'
import samplesArray from '../hardCoded/smaples'
import Sample from '../components/Sample'

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
            textAlign: 'center',
            margin: 0
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
          keys={this.state.samples.map(sample => sample.id)}
          // config={{ tension: 180, friction: 26 }}
          from={{ opacity: 0, maxHeight: 0 }}
          leave={{ opacity: 0, maxHeight: 0 }}
          enter={{ opacity: 1, maxHeight: 1000 }}
        >
          {this.state.samples.map((sample, i) => styles => (
            <div
              style={{ ...styles }}
              onMouseEnter={() => this.handleMouseEnter(sample.id)}
              onMouseLeave={this.handleMouseLeave}
            >
              <Sample
                {...sample}
                active={this.state.activeId === sample.id}
                onSamples={this.state.activeId}
              />
              <Divider hidden/>
              {i === this.state.samples.length -1 &&<Divider hidden/>}
            </div>
          ))}
        </Transition>
      </div>
    )
  }
}
export default SamplesContainer
