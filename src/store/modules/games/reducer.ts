import { Reducer } from 'redux'
import { IGames } from './types'

const INITIAL_STATE: Array<IGames> = []

const games: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_GAMES': {
      return [...action.payload]
    }
    default: {
      return state
    }
  }
}

export default games