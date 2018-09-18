import React from 'react'

const SpotifyContext = React.createContext()
export const SpotifyContextConsumer = SpotifyContext.Consumer
export class SpotifyContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      loggedIn: false,
      mediaType: 'playlists',
      items: '',
      itemIndex: '',
      userId: '',
      itemId: '',
      hasLoaded: false,
      loading: false,
      setSpotifyToken: this.setSpotifyToken,
      gotItems: this.gotItems,
      changeItem: this.changeItem,
      spotifyButtonLoaded: this.spotifyButtonLoaded,
      changeMediaType: this.changeMediaType,
      spotifyLoginButtonToggleAnimation: this.spotifyLoginButtonToggleAnimation
    }
  }

  setSpotifyToken = token => {
    this.setState({
      token,
      loggedIn: true
    })
  }

  gotItems = (userId, itemId, items, itemIndex) => {
    this.setState({
      userId,
      itemId,
      items,
      itemIndex
    })
  }
  changeItem = (userId, itemId, itemIndex) => {
    this.setState({
      userId,
      itemId,
      itemIndex
    })
  }
  spotifyButtonLoaded = state => {
    this.setState({
      hasLoaded: state
    })
  }

  changeMediaType = mediaType => {
    this.setState({
      mediaType
    })
  }
  spotifyLoginButtonToggleAnimation = () => {
    this.setState(state => ({
      loading: !state.loading
    }))
  }

  render() {
    return (
      <SpotifyContext.Provider value={this.state}>
        {this.props.children}
      </SpotifyContext.Provider>
    )
  }
}
