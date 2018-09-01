import React, { Component } from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import LogosBox from './LogosBox'
import SpotifyButton from './SpotifyButton'
import SpotifyLoginButton from './SpotifyLoginButton';

class Header extends Component {
  state = {
    mouseIn: false,
    mouseX: 0,
    mouseY: 0,
    visible: false
  }
  handleMouseMove = ({ clientX: mouseX, clientY: mouseY }) => {
    this.setState(() => ({
      mouseX,
      mouseY
    }))
  }

  handleClick = () => {
    this.setState(state => ({
      visible: !state.visible
    }))
  }
  handleMouseLeave = () => {
    this.setState(() => ({
      mouseX: 0,
      mouseY: 0
    }))
  }
  render() {
    return (
      <Grid centered padded>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* <Divider hidden /> */}
            <h1 style={{ fontSize: '4rem' }}>LIOR COHEN</h1>
            <p style={{ fontSize: '1.5rem' }} className="secondary-color">
              CODER
            </p>
            <LogosBox logos={['mail', 'facebook official']} size="large" />
          </div>
        </Grid.Column>

        <Grid.Column width={1} only="computer">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              right: '2rem',
              top: '2rem',
              zIndex: 1
            }}
          >
          <SpotifyLoginButton />
            <SpotifyButton />
          </div>
        </Grid.Column>
        <Divider hidden />
      </Grid>
    )
  }
}

export default Header
