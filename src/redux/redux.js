import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import styles from './reducers/styles'
const reducers = combineReducers({
  styles
})

const store = createStore(reducers, composeWithDevTools())
export default store
