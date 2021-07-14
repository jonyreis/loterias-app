import { Reducer } from 'redux'

const INITIAL_STATE: boolean = false

const shoppingCart: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_SHOPPING_CART': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default shoppingCart
