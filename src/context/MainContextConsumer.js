import React from 'react'
import { SpotifyContextConsumer } from './SpotifyContext'

class MainContextConsumer extends React.Component {
  render() {
    return (
      <SpotifyContextConsumer>
        {spotifyContext => this.props.children({ spotifyContext })}
      </SpotifyContextConsumer>
    )
  }
}

export default MainContextConsumer
