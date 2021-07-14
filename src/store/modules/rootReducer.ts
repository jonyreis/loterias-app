import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import gamesReducer from './games/reducer'
import betsReducer from './bets/reducer'
import cartReducer from './cart/reducer'
import shoppingCartReducer from './shoppingCart/reducer'

export default combineReducers({
  auth: authReducer,
  games: gamesReducer,
  bets: betsReducer,
  cart: cartReducer,
  shoppingCart: shoppingCartReducer
})