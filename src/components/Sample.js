import React, { Component } from 'react'
import { Grid, Image, Dimmer, Button } from 'semantic-ui-react'
import LogosBox from './LogosBox'
import { Spring, config } from 'react-spring'
import { defaultStyle } from '../styles/styles'
class Sample extends Component {
  state = {
    dimmed: false
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
            ...defaultStyle,
            fontSize: '2rem'
          }}
        >
          SEE PROJECT
        </Button>
      </div>
    )
    return (
      <Spring
        from={{ dimmerOpacity: 0, scale: 1 }}
        to={{
          dimmerOpacity: this.props.active || !this.props.onSamples ? 0 : 0.4,
          scale: this.props.active ? 1.1 : 1
        }}
        config={config.slow}
      >
        {styles => (
          <Grid
            padded
            style={{
              background: `rgba(255, 255, 255, 0.1)`
            }}
          >
            {/* ### COMPUTER ROW ### */}

            <Grid.Row
              style={{
                transform: `scale(${styles.scale})`,
                WebkitTransform: `scale(${styles.scale})`,
                MsTransform: `scale(${styles.scale})`
              }}
              only="computer"
            >
              <Dimmer
                active={
                  this.props.active || !this.props.onSamples ? false : true
                }
                style={{ opacity: styles.dimmerOpacity }}
              />

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
                  <div className="text" style={{textAlign: 'left'}}>
                    <h1 style={defaultStyle}>{this.props.title}</h1>
                    {this.props.description}
                  </div>
                  <div className="logos">
                    <LogosBox logos={this.props.logos} />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>

            {/* ### MOBILE ROW ### */}
            <Grid.Row only="tablet mobile" centered>
              <Grid.Column
                textAlign="center"
                width={14}
                onTouchStart={this.handleHideDimmer}
              >
                <div
                  className="container"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                  }}
                >
                  <div className="text" style={{textAlign: 'left'}}>
                    <h1 style={defaultStyle}>{this.props.title}</h1>
                    {this.props.description}
                  </div>
                  <div className="logos">
                    <LogosBox logos={this.props.logos} />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={14}>
                <Dimmer.Dimmable
                  blurring
                  as={Image}
                  dimmed={this.state.dimmed}
                  dimmer={{ active: this.state.dimmed, content: dimmer }}
                  onTouchStart={this.handleShowDimmer}
                  onMouseEnter={this.handleShowDimmer}
                  onMouseLeave={this.handleHideDimmer}
                  size="large"
                  src={this.props.image}
                  style={{ border: 'solid black 3px' }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Spring>
    )
  }
}

export default Sample
