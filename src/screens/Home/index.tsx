import React from 'react'
import { FlatList } from 'react-native'
import { useSelector, RootStateOrAny } from 'react-redux'

import GamesBtn from '../../components/GamesBtn'

import useGame from '../../hooks/useGame'

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
  const [betFilter, setBetFilter] = React.useState<Array<string>>([])
  const [listWithFilter, setListWithFilter] = React.useState<Array<any>>([])

  const { bets } = useSelector((state: RootStateOrAny) => state)

  const { getGame } = useGame()

  React.useEffect(() => {
    getGame()
  }, [])

  React.useEffect(() => {
    if (betFilter.length < 1 ) return setListWithFilter(bets)
    
    const filteredList = bets.filter((bet: { game: { type: string; } }) => {
      for (let i = 0; i < betFilter.length; i++) {
        if (bet.game.type === betFilter[i]) return bet
      }
    })

    setListWithFilter(filteredList)
  }, [betFilter, bets])

  return (
    <HomeContent>
      <RecentGame>Recent Game</RecentGame>
      <Filters>Filters</Filters>
      <GamesBtn betFilter={betFilter} setBetFilter={setBetFilter} />
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
                  <DateAndPrice>{item['created_at']} - (R$ {item.game?.price.toFixed(2)})</DateAndPrice>
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
