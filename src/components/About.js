import React, { Component } from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import avatar from '../assets/avatar.png'
import { defaultStyle, primaryStyle, colors } from '../styles/styles'
import { Parallax, ParallaxLayer } from 'react-spring'
import uuid from 'uuid'
const Content = ({
  _ref,
  imageLoaded,
  header = false,
  image = false,
  mainP = false,
  firstSmallP = false,
  secondSmallP = false,
  thirdSmallP = false,
  transparent = false,
  ...rest
}) => (
  <div ref={_ref}>
    <Grid
      padded
      style={{
        ...primaryStyle,
        background: transparent ? 'transparent' : 'white',
        width: '100%',
        ...rest
      }}
      centered
    >
      <Grid.Row>
        <Grid.Column computer={10} mobile={14} textAlign="center">
          <h1 style={{ ...defaultStyle, opacity: header ? 1 : 0 }}>
            Hi I'm Lior
          </h1>
          <Image
            src={avatar}
            circular
            size="small"
            centered
            style={{
              border: `solid 3px ${colors.primary}`,
              opacity: image ? 1 : 0
            }}
            onLoad={imageLoaded}
            onError={imageLoaded}
          />
          <Divider hidden />
          <p
            style={{
              fontSize: '1.5rem',
              opacity: mainP ? 1 : 0
            }}
          >
            I've made this website to show some of my work as a web developer.
            <br />
            It has some examples of websites and projects that I did
            <br />
            Check it out and contact me for anything.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
          computer={4}
          tablet={4}
          mobile={14}
          textAlign="center"
          style={{ opacity: firstSmallP ? 1 : 0 }}
        >
          <h1 style={defaultStyle}>Title-1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            consectetur voluptate aliquid ullam dolore vel reiciendis laudantium
            accusamus consequuntur dolor.
          </p>
        </Grid.Column>
        <Grid.Column computer={1} tablet={1} />
        <Grid.Column
          computer={4}
          tablet={4}
          mobile={14}
          textAlign="center"
          style={{ opacity: secondSmallP ? 1 : 0 }}
        >
          <h1 style={defaultStyle}>Title-2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ratione
            nemo libero nulla eos, tempore accusamus in harum corporis
            voluptatem?
          </p>
        </Grid.Column>
        <Grid.Column computer={1} tablet={1} />
        <Grid.Column
          computer={4}
          tablet={4}
          mobile={14}
          textAlign="center"
          style={{ opacity: thirdSmallP ? 1 : 0 }}
        >
          <h1 style={defaultStyle}>Title-3</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ab
            rem minima dignissimos? Debitis, consectetur voluptate. Iusto
            deleniti sint laboriosam!
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

const layers = [
  {
    name: 'header',
    id: uuid.v4(),
    header: true,
    offset: 1,
    speed: 0.5
  },
  {
    name: 'image',
    id: uuid.v4(),
    image: true,
    offset: 1,
    speed: 5
  },
  {
    name: 'mainP',
    id: uuid.v4(),
    mainP: true,
    offset: 1,
    speed: 5
  },
  {
    name: 'firstSmallP',
    id: uuid.v4(),
    firstSmallP: true,
    offset: 1,
    speed: 0.5
  },
  {
    name: 'secondSmallP',
    id: uuid.v4(),
    secondSmallP: true,
    offset: 1,
    speed: 5
  },
  {
    name: 'thirdSmallP',
    id: uuid.v4(),
    thirdSmallP: true,
    offset: 1,
    speed: 0.5
  }
]

class About extends Component {
  state = {
    height: null,
    scrollTo: 1,
    layers,
    pages: 2
  }

  containerRef = React.createRef()
  parallaxRef = React.createRef()

  componentDidUpdate = (prevProps, prevState) => {
    //make first scroll click
    if (prevState.height) return
    this.handleClick()
  }

  getHeight = () => {
    this.setState({
      height: this.containerRef.current.clientHeight
    })
  }

  handleClick = () => {
    this.parallaxRef.current.scrollTo(this.state.scrollTo)

    this.setState(state => ({
      scrollTo: state.scrollTo === 0 ? 1 : 0
    }))
    
  }
  onMouseMove = e => {
    // console.log(e.clientY)
  }
  render() {
    return this.state.height ? (
      <React.Fragment>
        <Content position="absolute" />
        <div
          className="wrapper"
          style={{ height: this.state.height }}
          onClick={this.handleClick}
          onMouseMove={this.onMouseMove}
        >
          <Parallax
            pages={this.state.pages}
            style={{ height: this.state.height }}
            ref={this.parallaxRef}
            config={{ tension: 180, friction: 50 }}
            scrolling={false}
          >
            {this.state.layers.map(layer => (
              <ParallaxLayer
                key={layer.id}
                offset={layer.offset}
                speed={layer.speed}
              >
                <Content transparent {...layer} />
              </ParallaxLayer>
            ))}
          </Parallax>
        </div>
      </React.Fragment>
    ) : (
      <Content
        _ref={this.containerRef}
        imageLoaded={this.getHeight}
      />
    )
  }
}

export default About
