import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import avatar from '../assets/avatar.png'
const About = () => (
  <Grid style={{ background: 'white', color: '#1e2736' }} centered>
    <Grid.Row>
      <Grid.Column width={10} textAlign="center">
        <Image
          src={avatar}
          circular
          size="small"
          centered
          style={{ border: 'solid 3px #1e2736' }}
        />
        <Divider hidden />
        <h1>PERSONAL DETAILS</h1>
        <p
          style={{
            fontSize: '1.5rem'
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam
          minima atque facilis numquam commodi officiis accusantium asperiores
          placeat consequuntur quasi perspiciatis, quam rerum iste quaerat
          reiciendis cum possimus ipsam quis. Quam vero sapiente
        </p>
      </Grid.Column>
    </Grid.Row>
    <Divider hidden />
    <Grid.Row>
      <Grid.Column width={4} textAlign="center">
        <h1>Title-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          consectetur voluptate aliquid ullam dolore vel reiciendis laudantium
          accusamus consequuntur dolor.
        </p>
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4} textAlign="center">
        <h1>Title-2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ratione
          nemo libero nulla eos, tempore accusamus in harum corporis voluptatem?
        </p>
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4} textAlign="center">
        <h1>Title-3</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ab rem
          minima dignissimos? Debitis, consectetur voluptate. Iusto deleniti
          sint laboriosam!
        </p>
      </Grid.Column>
    </Grid.Row>
    <Divider hidden />
  </Grid>
)

export default About
