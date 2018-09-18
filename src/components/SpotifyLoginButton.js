import React from 'react'
import { Popup } from 'semantic-ui-react'
import { Keyframes } from 'react-spring'
import SpotifyIcon from './SpotifyIcon'
import { defaultStyle, secondaryStyle } from '../styles/styles'
import MainContextConsumer from '../context/MainContextConsumer'

const SpotifyLoginButton = props => {
  const hadleButtonClick = e => {
    e.preventDefault()
    props.spotifyLoginButtonToggleAnimation()
  }

  const onRest = ele => {
    ele.height === 80 &&
      (window.location = window.location.href.includes('localhost')
        ? 'http://localhost:8888/spotify'
        : 'https://spotify-oauth-bridge-template.herokuapp.com/spotify')
  }

  const Container = Keyframes.Spring({
    show: {
      to: {
        ...secondaryStyle,
        background: 'rgba(0,0,0,0)',
        size: 35,
        padding: 0
      }
    },
    animate: [
      {
        from: {
          background: 'rgba(0,0,0,0)',
          width: 25,
          ...secondaryStyle,
          size: 30,
          padding: 0
        },
        to: {
          background: 'black',
          width: 300,
          ...secondaryStyle,
          size: 18,
          padding: 8
        },
        config: { tension: 60, friction: 10 }
      },
      {
        from: { height: 25, ...secondaryStyle },
        to: { height: 80, color: '#fff' },
        config: { tension: 300, friction: 20 }
      }
    ]
  })
  return (
    !props.loggedIn && (
      <Container state={props.loading ? 'animate' : 'show'} onRest={onRest}>
        {styles => (
          <Popup
            inverted
            trigger={
              <div
                onClick={hadleButtonClick}
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
                <SpotifyIcon color={styles.color} size={styles.size} />
              </div>
            }
          >
            <Popup.Content>
              <div
                style={{
                  ...defaultStyle,
                  ...secondaryStyle,
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
export default props => (
  <MainContextConsumer>
    {({ spotifyContext }) => (
      <SpotifyLoginButton {...props} {...spotifyContext} />
    )}
  </MainContextConsumer>
)
