import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup } from 'semantic-ui-react'
import { Keyframes } from 'react-spring'
import SpotifyIcon from './SpotifyIcon'

class SpotifyLoginButton extends Component {
  hadleButtonClick = e => {
    e.preventDefault()
    this.props.toggleLoadingAnimation()
  }

  onRest = style => {
    style.height === 80 &&
      (window.location = window.location.href.includes('localhost')
        ? 'http://localhost:8888/spotify'
        : 'https://spotify-oauth-bridge-template.herokuapp.com/spotify')
  }
  render() {
    const Container = Keyframes.Spring({
      show: {
        to: {
          background: 'rgba(0,0,0,0)',
          color: '#6fef99',
          size: 35,
          padding: 0
        }
      },
      animate: [
        {
          from: {
            background: 'rgba(0,0,0,0)',
            width: 25,
            color: '#6fef99',
            size: 30,
            padding: 0
          },
          to: {
            background: 'black',
            width: 300,
            color: '#6fef99',
            size: 18,
            padding: 8
          },
          config: { tension: 60, friction: 10 }
        },
        {
          from: { height: 25, color: '#6fef99' },
          to: { height: 80, color: '#fff' },
          config: { tension: 300, friction: 20 }
        }
      ]
    })
    return (
      !this.props.loggedIn && (
        <Container
          state={this.props.loading ? 'animate' : 'show'}
          onRest={this.onRest}
        >
          {styles => (
            <Popup
              inverted
              trigger={
                <div
                  onClick={this.hadleButtonClick}
                  style={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                    padding: styles.padding,
                    width: styles.width,
                    height: styles.height,
                    background: styles.background
                  }}
                >
                  {/* <Icon name="spotify" size="large" style={{ margin: 0 }} /> */}
                  <SpotifyIcon color={styles.color} size={styles.size} />
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
          )}
        </Container>
      )
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleLoadingAnimation: () => {
    dispatch({
      type: 'SPOTIFY_LOGIN_BUTTON_TOOGLE_ANIMATION'
    })
  }
})
const mapStateToProps = state => ({
  loggedIn: state.spotify.loggedIn,
  loading: state.spotify.loading
})
const SpotifyLoginButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotifyLoginButton)
export default SpotifyLoginButtonContainer
