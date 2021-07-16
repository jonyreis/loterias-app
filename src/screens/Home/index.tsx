import React from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import GamesBtn from '../../components/GamesBtn'

import api from '../../services/api'
import convertToCurrency from '../../utils/convertToCurrency'

import { 
  HomeContent, 
  RecentGame, 
  Filters,
  Bets,
  Bet,
  Separator,
  BetInfo,
  Numbers,
  DateAndPrice,
  TypeBet
} from './styles'

const Home = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<Array<string>>([])
  const [listWithFilter, setListWithFilter] = React.useState<Array<any>>([])

  const { auth, bets } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    getGame()
  }, [])

  React.useEffect(() => {
    if (selectedFilter.length <= 0 ) return setListWithFilter(bets)
    
    const filteredList = bets.filter((bet: { game: { type: string; } }) => {
      if (bet.game.type === selectedFilter[0] || bet.game.type === selectedFilter[1] || bet.game.type === selectedFilter[2]) {
        return bet
      } 
    })

    setListWithFilter(filteredList)
  }, [selectedFilter])

  async function getGame() {
    const games = await api.get('/games', { 
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
    })

    const bets = await api.get('/game/bets', { 
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
    })

    const listGame = games.data.map((item: {
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
      payload: listGame
    })

    dispatch({
      type: 'SAVE_BETS',
      payload: bets.data
    })

    setListWithFilter([...bets.data])
  }

  return (
    <HomeContent>
      <RecentGame>Recent Game</RecentGame>
      <Filters>Filters</Filters>
      <GamesBtn selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Bets>
        <FlatList 
          data={listWithFilter} 
          keyExtractor={item => item.id} 
          renderItem={({ item }) => {
            return (
              <Bet>
                <Separator color={item.game?.color} />
                <BetInfo>
                  <Numbers style={{ marginRight: item.game.type === 'Lotofácil' ? 12 : 0}}>
                    {item.numbers}
                  </Numbers>
                  <DateAndPrice>{item['created_at']} - ({convertToCurrency(item.game?.price || 0)})</DateAndPrice>
                  <TypeBet color={item.game?.color}>{item.game?.type}</TypeBet>
                </BetInfo>
              </Bet>
            );
          }}
        />
      </Bets>
    </HomeContent>
  )
}

export default Home
