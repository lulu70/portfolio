import React, { Component } from 'react'
import './App.css'
import AppContainer from './components/AppContainer'
import { defaultStyle, colors } from './styles/styles'

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          ...defaultStyle,
          background: colors.primary,
          color: '#fff',
          boxSizing: 'border-box',
          fontSize: '1.2rem'
        }}
      >
        <AppContainer />
      </div>
    )
  }
}

export default App
