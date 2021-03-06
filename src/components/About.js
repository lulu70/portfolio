import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import avatar from '../assets/avatar.png'
import { defaultStyle, primaryStyle, colors } from '../styles/styles'

const About = () => (
  <Grid padded style={{ ...primaryStyle, background: 'white' }} centered>
    <Grid.Row>
      <Grid.Column computer={10} mobile={14} textAlign='center'>
        <h1 style={defaultStyle}>Hi I'm Lior</h1>
        <Image
          src={avatar}
          circular
          size='small'
          centered
          style={{ border: `solid 3px ${colors.primary}` }}
        />
        <Divider hidden />
        <p
          style={{
            fontSize: '1.8rem'
          }}
        >
          Please Take A Look
        </p>
      </Grid.Column>
    </Grid.Row>
    <Divider hidden />
    {/* <Grid.Row>
      <Grid.Column computer={4} tablet={4} mobile={14}textAlign="center">
        <h1>Title-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          consectetur voluptate aliquid ullam dolore vel reiciendis laudantium
          accusamus consequuntur dolor.
        </p>
      </Grid.Column>
      <Grid.Column computer={1} tablet={1}/>
      <Grid.Column computer={4} tablet={4} mobile={14} textAlign="center">
        <h1>Title-2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ratione
          nemo libero nulla eos, tempore accusamus in harum corporis voluptatem?
        </p>
      </Grid.Column>
      <Grid.Column computer={1} tablet={1}/>
      <Grid.Column computer={4} tablet={4} mobile={14} textAlign="center">
        <h1>Title-3</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ab rem
          minima dignissimos? Debitis, consectetur voluptate. Iusto deleniti
          sint laboriosam!
        </p>
      </Grid.Column>
    </Grid.Row> */}
    <Divider hidden />
  </Grid>
)

export default About
