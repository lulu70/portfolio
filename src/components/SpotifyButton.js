import React, { Component } from 'react'
import { Loader, Dimmer, Dropdown } from 'semantic-ui-react'
import SpotifyIcon from './SpotifyIcon'
import { defaultStyle } from '../styles/styles'
import MainContextConsumer from '../context/MainContextConsumer'

class SpotifyButton extends Component {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('access_token')
    if (token) this.props.setSpotifyToken(token)
  }
  componentDidUpdate(preProps) {
    if (preProps.loggedIn !== this.props.loggedIn) {
      this.fetchData()
    }
  }

  fetchData = async () => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.props.token}`,
      'Content-Type': 'application/json',
    }
    try {
      //trying to get playlists:
      let response = await fetch(
        `https://api.spotify.com/v1/me/playlists?limit=50`,
        {
          headers,
        }
      )
      let json = await response.json()
      if (json.items.length === 0) {
        // if there are no playlists => trying to get albums:
        response = await fetch(
          `https://api.spotify.com/v1/me/albums?limit=50`,
          {
            headers,
          }
        )
        json = await response.json()
        this.props.changeMediaType('albums')
      }
      if (json.items.length === 0) {
        //if there are no albums => trying to get songs:
        response = await fetch(
          `https://api.spotify.com/v1/me/tracks?limit=50`,
          {
            headers,
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
                id: '0IDk2BLXypQbSK6yi4ekuH',
              },
            },
          ],
        }
      }
      const items = json.items
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
  handleItemSelect = (e, { value }) => {
    value !== this.props.itemIndex && this.props.spotifyButtonLoaded(false)
    const newIndex = value
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
  capitalize = (string) => string[0].toUpperCase() + string.slice(1)
  render() {
    return (
      this.props.itemId && (
        <React.Fragment>
          <iframe
            onLoad={() => this.props.spotifyButtonLoaded(true)}
            title='spotify-button'
            src={
              this.props.mediaType === 'playlists'
                ? `https://open.spotify.com/embed/user/${this.props.userId}/playlist/${this.props.itemId}`
                : this.props.mediaType === 'albums'
                ? `https://open.spotify.com/embed/album/${this.props.itemId}`
                : `https://open.spotify.com/embed/track/${this.props.itemId}`
            }
            width='300'
            height='80'
            frameBorder='0'
            allowtransparency='true'
            allow='encrypted-media'
          />

          {!this.props.hasLoaded ? (
            <Dimmer active>
              <SpotifyIcon
                color='#fff'
                style={{ position: 'absolute', top: '8px', right: '8px' }}
              />
              <Loader indeterminate style={defaultStyle}>{`Loading ${
                this.props.mediaType !== 'none' ? this.props.mediaType : ''
              }...`}</Loader>
            </Dimmer>
          ) : this.props.mediaType !== 'none' ? (
            <Dropdown
              placeholder={`Change ${this.capitalize(this.props.mediaType)}`}
              button
              selection
              scrolling
              fluid
              style={{
                ...defaultStyle,
                color: 'white',
                background: 'black',
                borderRadius: '0',
              }}
              selectOnBlur={false}
              onChange={this.handleItemSelect}
              options={this.props.items.map((item, i) => ({
                key: item.name,
                text:
                  this.props.mediaType === 'playlists'
                    ? item.name
                    : this.props.mediaType === 'albums'
                    ? item.album.name
                    : this.props.mediaType === 'tracks'
                    ? item.track.name
                    : '',
                value: i,
              }))}
            />
          ) : (
            <span
              style={{
                fontSize: '1.1rem',
                background: 'black',
                textAlign: 'center',
              }}
            >
              Couldnt Get Music From Your Library
            </span>
          )}
        </React.Fragment>
      )
    )
  }
}

export default (props) => (
  <MainContextConsumer>
    {({ spotifyContext }) => <SpotifyButton {...props} {...spotifyContext} />}
  </MainContextConsumer>
)
