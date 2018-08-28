import React from 'react'
import { connect } from 'react-redux'
import { Icon, Popup } from 'semantic-ui-react'

const SpotifyLoginButton = props => {
  const hadleButtonClick = e => {
    e.preventDefault()
    window.location = window.location.href.includes('localhost')
      ? 'http://localhost:8888/spotify'
      : 'https://spotify-oauth-bridge-template.herokuapp.com/spotify'
  }
  return (
    !props.loggedIn && (
      <Popup
        inverted
        position="top center"
        trigger={
          <div
            onClick={hadleButtonClick}
            className="secondary-color"
            style={{
              cursor: 'pointer',
              background: 'black',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0.3rem'
            }}
          >
            <Icon name="spotify" size="large" style={{ margin: 0 }} />
            <div>
              <div style={{ fontSize: '0.7rem' }}>Listen to music on</div>
              <h6 style={{ margin: 0 }}>Spotify</h6>
            </div>
          </div>
        }
      >
        <Popup.Content>
          <div
            className="secondary-color"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              textAlign: 'center'
            }}
          >
            Log in and approve the app to listen to music from your own
            spotify library
          </div>
        </Popup.Content>
      </Popup>
    )
  )
}

const mapStateToProps = state => ({
  loggedIn: state.spotify.loggedIn
})
const SpotifyLoginButtonContainer = connect(mapStateToProps)(SpotifyLoginButton)
export default SpotifyLoginButtonContainer
