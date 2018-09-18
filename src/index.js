import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/redux.js'
import { Provider } from 'react-redux'
import MainContextProvider from './context/MainContextProvider'
ReactDOM.render(
  <Provider store={store}>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
