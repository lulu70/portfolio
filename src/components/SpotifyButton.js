import React, { Component } from 'react'
import queryString from 'query-string'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SpotifyButton extends Component {
  componentDidMount() {
    const token = queryString.parse(window.location.search).access_token
    if (token) this.props.setToken(token)
  }
  componentDidUpdate(preProps) {
    if (preProps.loggedIn !== this.props.loggedIn) {
      this.fatchData()
    }
  }

  fatchData = async () => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.props.token}`,
      'Content-Type': 'application/json'
    }
    try {
      //trying to get playlists:
      let response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
        headers
      })
      let json = await response.json()
      if (json.items.length === 0) {
        // if there are no playlists => trying to get albums:
        response = await fetch(`https://api.spotify.com/v1/me/albums`, {
          headers
        })
        json = await response.json()
        this.props.changeMediaType('albums')
      }
      if (json.items.length === 0) {
        //if there are no albums => trying to get songs:
        response = await fetch(
          `https://api.spotify.com/v1/me/tracks?limit=50`,
          {
            headers
          }
        )
        json = await response.json()
        this.props.changeMediaType('tracks')
      }
      if (json.items.length === 0) {
        // if there are no songs => play hardcoded song :
        this.props.changeMediaType('none')
        json = {
          items: [
            {
              track: {
                id: '0IDk2BLXypQbSK6yi4ekuH'
              }
            }
          ]
        }
      }
      const items = json.items
      items.length === 1 && this.props.setStateToOnlyOneItem()
      const itemIndex = 0
      const item = json.items[itemIndex]
      const userId = this.props.mediaType === 'playlists' ? item.owner.id : ''
      const itemId =
        this.props.mediaType === 'playlists'
          ? item.id
          : this.props.mediaType === 'albums'
            ? item.album.id
            : item.track.id
      this.props.gotItems(userId, itemId, items, itemIndex)
    } catch (error) {
      console.log(error)
    }
  }

  handleItemChangeClick = (e, name) => {
    e.preventDefault()
    const newIndex =
      name === 'forward'
        ? this.props.itemIndex === this.props.items.length - 1
          ? 0
          : this.props.itemIndex + 1
        : this.props.itemIndex === 0
          ? this.props.items.length - 1
          : this.props.itemIndex - 1

    const newItem = this.props.items[newIndex]
    const userId = this.props.mediaType === 'playlists' ? newItem.owner.id : ''
    const itemId =
      this.props.mediaType === 'playlists'
        ? newItem.id
        : this.props.mediaType === 'albums'
          ? newItem.album.id
          : newItem.track.id
    this.props.changeItem(userId, itemId, newIndex)
  }

  render() {
    return (
      this.props.itemId && (
        <React.Fragment>
          <iframe
            onLoad={this.props.spotifyButtonLoaded}
            title="spotify-button"
            src={
              this.props.mediaType === 'playlists'
                ? `https://open.spotify.com/embed/user/${
                    this.props.userId
                  }/playlist/${this.props.itemId}`
                : this.props.mediaType === 'albums'
                  ? `https://open.spotify.com/embed/album/${this.props.itemId}`
                  : `https://open.spotify.com/embed/track/${this.props.itemId}`
            }
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          {this.props.hasLoaded &&
            (this.props.onlyOneItem === false ||
              this.props.mediaType === 'none') && (
              <div
                className="secondary-color"
                style={{
                  display: 'inline-flex',
                  width: '300px',
                  justifyContent:
                    this.props.mediaType === 'none'
                      ? 'center'
                      : 'space-between',
                  background: 'black',
                  fontSize: '1rem'
                }}
              >
                {this.props.mediaType !== 'none' && (
                  <Icon
                    link
                    name="backward"
                    onClick={e => this.handleItemChangeClick(e, 'back')}
                  />
                )}

                <span>
                  {this.props.mediaType === 'playlists'
                    ? 'Change Playlist'
                    : this.props.mediaType === 'albums'
                      ? 'Change Album'
                      : this.props.mediaType === 'tracks'
                        ? 'Change Track'
                        : 'Couldnt Get Music From Your Library'}
                </span>
                {this.props.mediaType !== 'none' && (
                  <Icon
                    link
                    name="forward"
                    onClick={e => this.handleItemChangeClick(e, 'forward')}
                  />
                )}
              </div>
            )}
        </React.Fragment>
      )
    )
  }
}

const mapStateToProps = state => ({
  token: state.spotify.token,
  loggedIn: state.spotify.loggedIn,
  items: state.spotify.items,
  itemIndex: state.spotify.itemIndex,
  userId: state.spotify.userId,
  itemId: state.spotify.itemId,
  hasLoaded: state.spotify.hasLoaded,
  mediaType: state.spotify.mediaType,
  onlyOneItem: state.spotify.onlyOneItem
})
const mapDispatchToProps = dispatch => ({
  setToken: token => {
    dispatch({
      type: 'SET_SPOTIFY_TOKEN',
      token
    })
  },
  gotItems: (userId, itemId, items, itemIndex) => {
    dispatch({
      type: 'GOT_ITEMS',
      userId,
      itemId,
      items,
      itemIndex
    })
  },
  changeItem: (userId, itemId, itemIndex) => {
    dispatch({
      type: 'CHANGE_ITEM',
      userId,
      itemId,
      itemIndex
    })
  },
  spotifyButtonLoaded: () => {
    dispatch({
      type: 'SPOTIFY_BUTTON_LOADED'
    })
  },
  changeMediaType: mediaType => {
    dispatch({
      type: 'CHANGE_MEDIA_TYPE',
      mediaType
    })
  },
  setStateToOnlyOneItem: () => {
    dispatch({
      type: 'ONLY_ONE_ITEM'
    })
  }
})
const SpotifyButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotifyButton)
export default SpotifyButtonContainer
