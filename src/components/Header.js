import React from 'react'
import sFLogo from '../assets/logo/logo_white.png'
import { Divider, Grid, Image } from 'semantic-ui-react'

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
        <Image src={sFLogo} size="small" />
        <Divider hidden />
        <p
          style={{
            fontSize: '1.5rem'
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam
          minima atque facilis numquam commodi officiis accusantium asperiores
          placeat consequuntur quasi perspiciatis, quam rerum iste quaerat
          reiciendis cum possimus ipsam quis. Quam vero sapiente, obcaecati
          recusandae blanditiis provident rem nisi alias quia veniam non fugit
          cumque asperiores at aliquam voluptatibus.
        </p>
        <Divider hidden />
      </div>
    </Grid.Column>
  </Grid>
)

export default Header
