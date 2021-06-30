import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import GamesBtn from '../../components/GamesBtn'

import api from '../../services/api'


import styled from 'styled-components/native'

const HomeContent = styled.View`
  padding: 0 20px;
`

const RecentGame = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;

  margin: 30px 0 15px;
`;

const Filters = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 17px;
  font-weight: 400;
`

const Home = () => {
  const { auth } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    getGame()
  }, [])

  async function getGame() {
    const games = await api.get('/games', { 
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

  }

  return (
    <HomeContent>
      <RecentGame>Recent Game</RecentGame>
      <Filters>Filters</Filters>
      <GamesBtn />
    </HomeContent>
  )
}

export default Home