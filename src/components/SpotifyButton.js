import React, { Component } from 'react'
import queryString from 'query-string'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SpotifyButton extends Component {
  state = {
    token: '',
    loggedIn: false,
    playlists: '',
    playlistNumber: '',
    userId: '',
    playlistId: ''
  }
  componentDidMount() {
    const token = queryString.parse(window.location.search).access_token
    if (token) this.props.setToken(token)
  }
  componentDidUpdate(preProps) {
    if (preProps.loggedIn !== this.props.loggedIn) {
      fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.props.token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(json => {
          if (json.items.length > 0) {
            const playlists = json.items
            const playlistNumber = 0
            const playlist = json.items[playlistNumber]
            const userId = playlist.owner.id
            const playlistId = playlist.id
            this.props.gotPlaylists(
              userId,
              playlistId,
              playlists,
              playlistNumber
            )
          }
        })
        .catch(err => console.log(err))
    }
  }
  handlePlaylistChangeClick = (e, name) => {
    e.preventDefault()
    const newNumber =
      name === 'forward'
        ? this.props.playlistNumber === this.props.playlists.length - 1
          ? 0
          : this.props.playlistNumber + 1
        : this.props.playlistNumber === 0
          ? this.props.playlists.length - 1
          : this.props.playlistNumber - 1

    const newPlaylist = this.props.playlists[newNumber]
    const userId = newPlaylist.owner.id
    const playlistId = newPlaylist.id
    this.props.changePlaylist(userId, playlistId, newNumber)
  }

  render() {
    return (
      this.props.playlistId && (
        <React.Fragment>
          <iframe
            title="spotify-button"
            src={`https://open.spotify.com/embed/user/${
              this.props.userId
            }/playlist/${this.props.playlistId}`}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <div
            className="secondary-color"
            style={{
              display: 'inline-flex',
              width: '300px',
              justifyContent: 'space-between',
              background: 'black'
            }}
          >
            <Icon
              link
              name="backward"
              onClick={e => this.handlePlaylistChangeClick(e, 'back')}
            />
            <span>Change Playlist</span>
            <Icon
              link
              name="forward"
              onClick={e => this.handlePlaylistChangeClick(e, 'forward')}
            />
          </div>
        </React.Fragment>
      )
    )
  }
}

const mapStateToProps = state => ({
  token: state.spotify.token,
  loggedIn: state.spotify.loggedIn,
  playlists: state.spotify.playlists,
  playlistNumber: state.spotify.playlistNumber,
  userId: state.spotify.userId,
  playlistId: state.spotify.playlistId
})
const mapDispatchToProps = dispatch => ({
  setToken: token => {
    dispatch({
      type: 'SET_SPOTIFY_TOKEN',
      token
    })
  },
  gotPlaylists: (userId, playlistId, playlists, playlistNumber) => {
    dispatch({
      type: 'GOT_PLAYLISTS',
      userId,
      playlistId,
      playlists,
      playlistNumber
    })
  },
  changePlaylist: (userId, playlistId, playlistNumber) => {
    dispatch({
      type: 'CHANGE_PLAYLIST',
      userId,
      playlistId,
      playlistNumber
    })
  }
})
const SpotifyButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotifyButton)
export default SpotifyButtonContainer
