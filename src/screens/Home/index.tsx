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
  const [selectedFilter, setSelectedFilter] = React.useState<Array<string>>([])
  const [listWithFilter, setListWithFilter] = React.useState<Array<any>>([])

  const { bets } = useSelector((state: RootStateOrAny) => state)

  const { getGame } = useGame()

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
  }, [selectedFilter, bets])

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
