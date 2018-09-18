import React from 'react'
import { SpotifyContextProvider } from './SpotifyContext'

class MainContextProvider extends React.Component {
  render() {
    return (
      <SpotifyContextProvider>{this.props.children}</SpotifyContextProvider>
    )
  }
}

export default MainContextProvider