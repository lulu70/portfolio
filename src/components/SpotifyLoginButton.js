import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
const SpotifyLoginButton = props => {
  const hadleButtonClick = e => {
    e.preventDefault()
    window.location = window.location.href.includes('localhost')
      ? 'http://localhost:8888/spotify'
      : 'https://spotify-oauth-bridge-template.herokuapp.com/spotify'
  }
  return (
    !props.loggedIn && (
      <div
        onClick={hadleButtonClick}
        className="secondary-color"
        style={{
          cursor: 'pointer',
          background: 'black',
          display: 'inline-flex',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '1rem',
          fontSize: '1rem',
          borderRadius: '50%',
        }}
      >
        <Icon name="spotify" size="big" style={{margin: 0}}/> 
      </div>
    )
  )
}

const mapStateToProps = state => ({
  loggedIn: state.spotify.loggedIn
})
const SpotifyLoginButtonContainer = connect(mapStateToProps)(SpotifyLoginButton)
export default SpotifyLoginButtonContainer
