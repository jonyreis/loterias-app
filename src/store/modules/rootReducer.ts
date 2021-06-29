import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import gamesReducer from './games/reducer'


export default combineReducers({
  auth: authReducer,
  games: gamesReducer
})