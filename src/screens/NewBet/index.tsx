import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Title = styled.Text`
  color: #707070;
  text-align: center;
  font-style: italic;
  font-size: 44px;
  font-weight: 700;
  margin: auto;
`;

const NewBet = () => {
  return (
    <Title>New Bet</Title>
  )
}

export default NewBet