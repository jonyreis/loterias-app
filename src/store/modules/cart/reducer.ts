import { Reducer } from 'redux'

const INITIAL_STATE: boolean = false

const cart: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CART_ON': {
      return action.payload
    }
    case 'CART_OFF': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default cart