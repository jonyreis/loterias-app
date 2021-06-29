import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import GamesBtn from '../../components/GamesBtn'

import api from '../../services/api'


import styled from 'styled-components/native'


const Title = styled.Text`
  color: #707070;
  text-align: center;
  font-style: italic;
  font-size: 44px;
  font-weight: 700;
  margin: auto;
`;

const Home = () => {
  const [games, setGames] = React.useState([])
  const { auth } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    getGame()
  }, [])

  async function getGame() {
    await api.get('/games', { 
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
    }).then((res) => setGames(res.data)).catch((err) => alert(err.message))


    const listGame = games.map((item: {
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
    <>
      <GamesBtn />
      <Title>Home</Title>
    </>
  )
}

export default Home