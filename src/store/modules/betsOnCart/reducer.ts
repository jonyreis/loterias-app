import { Reducer } from 'redux'
import { IBets } from './types'

const INITIAL_STATE: Array<IBets> = []

const betsOnCart: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BET_TO_CART': {
      return [...action.payload]
    }
    default: {
      return state
    }
  }
}

export default betsOnCart
