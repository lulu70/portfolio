import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import HeaderLogo from './HeaderLogo'
import LogosBox from './LogosBox'
import SpotifyButton from './SpotifyButton'

const Header = () => (
  <Grid centered>
  <Grid.Column width={1}/>
    <Grid.Column width={14}>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Divider hidden />
        <HeaderLogo />
        <h1 style={{ fontSize: '4rem' }}>LIOR COHEN</h1>
        <p style={{ fontSize: '1.5rem' }} className="secondary-color">
          CODER , WEB DEVELOPER
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
            top: '2rem'
          }}
        >
          <SpotifyButton />
        </div>
    </Grid.Column>
  </Grid>
)

export default Header
