import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import spotify from './reducers/spotifyReducer'
const reducers = combineReducers({
  spotify
})

const store = createStore(reducers, composeWithDevTools())
export default store
