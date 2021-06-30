import { Reducer } from 'redux'
import { IBets } from './types'

const INITIAL_STATE: Array<IBets> = []

const bets: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_BETS': {
      return [...action.payload]
    }
    default: {
      return state
    }
  }
}

export default bets
