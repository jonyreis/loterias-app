import api from '../services/api'
import { useDispatch } from 'react-redux'


async function getGame(setListWithFilter: any) {
  const dispatch = useDispatch()

  const games = await api.get('/games')
  const betsApi = await api.get('game/bets')
  
  const listButtonGame = games.data.map((item: {
    id: number;
    color: string; 
    type: string; 
    description: string;
    ['max_number']: number;
    ['min_cart_value']: number;
    price: number; 
    range: number; 
  }) => {
    return {
      id: item.id,
      color: item.color,
      type: item.type,
      description: item.description,
      maxNumber: item['max_number'],
      minCartValue: item['min_cart_value'],
      price: item.price,
      range: item.range
    }
  })

  dispatch({
    type: 'ADD_GAMES',
    payload: listButtonGame
  })

  dispatch({
    type: 'SAVE_BETS',
    payload: betsApi.data
  })

  setListWithFilter([...betsApi.data])
}

export default getGame