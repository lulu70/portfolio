import React, { Component } from 'react'
import { Grid, Image, Dimmer, Button } from 'semantic-ui-react'
import LogosBox from './LogosBox'

class Sample extends Component {
  state = {
    dimmed: false,
    fontFamily: 'Montserrat, sans-serif'
  }
  handleShowDimmer = () => this.setState({ ...this.state, dimmed: true })
  handleHideDimmer = () => this.setState({ ...this.state, dimmed: false })
  render() {
    const dimmer = (
      <div>
        <Button
          as="a"
          href={this.props.link}
          target="_blank"
          inverted
          color="black"
          size="big"
          style={{
            fontSize: '2rem',
            fontFamily: this.state.fontFamily
          }}
        >
          SEE PROJECT
        </Button>
      </div>
    )
    return (
      <Grid
        style={{
          background: `rgba(255, 255, 255, ${
            this.props.bg === 'dark' ? '0' : '0.1'
          })`
        }}
      >
        <Grid.Row only="computer">
          <Grid.Column width={1} />
          <Grid.Column verticalAlign="middle" width={7}>
            <Dimmer.Dimmable
              blurring
              as={Image}
              dimmed={this.state.dimmed}
              dimmer={{ active: this.state.dimmed, content: dimmer }}
              onMouseEnter={this.handleShowDimmer}
              onMouseLeave={this.handleHideDimmer}
              size="large"
              src={this.props.image}
              style={{ border: 'solid black 3px' }}
            />
          </Grid.Column>
          <Grid.Column textAlign="center" width={7}>
            <div
              className="container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div className="text">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
              </div>
              <div className="logos">
                <LogosBox logos={this.props.logos} />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row only="mobile tablet" centered>
          <Grid.Column verticalAlign="middle" width={16}>
            <Dimmer.Dimmable
              blurring
              as={Image}
              dimmed={this.state.dimmed}
              dimmer={{ active: this.state.dimmed, content: dimmer }}
              onMouseEnter={this.handleShowDimmer}
              onMouseLeave={this.handleHideDimmer}
              size="large"
              src={this.props.image}
              style={{ border: 'solid black 3px' }}
            />
          </Grid.Column>
          <Grid.Column textAlign="center" width={16}>
            <div
              className="container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div className="text">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
              </div>
              <div className="logos">
                <LogosBox logos={this.props.logos} />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Sample
