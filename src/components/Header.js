import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import HeaderLogo from './HeaderLogo';
import LogosBox from './LogosBox';

const Header = () => (
  <Grid centered>
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
        <p style={{ fontSize: '1.5rem', color: '#6fef99' }}>CODER ,  WEB DEVELOPER</p>
        <LogosBox logos={['mail','facebook square','linkedin']} size="large"/>
      </div>
    </Grid.Column>
  </Grid>
)

export default Header
