import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
// import registerServiceWorker from './registerServiceWorker'
import MainContextProvider from './context/MainContextProvider'
ReactDOM.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>,
  document.getElementById('root')
)
// registerServiceWorker()
