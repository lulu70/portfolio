import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import avatar from '../assets/avatar.png'
const About = () => (
  <Grid padded style={{ background: 'white' }} className="primary-color" centered>
    <Grid.Row>
      <Grid.Column computer={10} mobile={14} textAlign="center">
      <h1>Hi I'm Lior</h1>
        <Image
          src={avatar}
          circular
          size="small"
          centered
          style={{ border: 'solid 3px #1e2736' }}
        />
        <Divider hidden />
        <p
          style={{
            fontSize: '1.5rem'
          }}
        >
          I've made this website to show some of my work as a web
          developer.
          <br />
          It has some examples of websites and projects that I did
          <br />
          Check it out and contact me for anything.
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
