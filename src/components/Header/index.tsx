import React from 'react'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const HeaderContent = styled.View`
  background-color: #fff;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
`

const ButtonLogo = styled.TouchableOpacity`
  max-width: 75px;
`

const TGL = styled.Text`
  color: #707070;
  font-size: 30px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`

const LineTitle = styled.View`
  background-color: #B5C401;
  border-radius: 6px;
  width: 75px;
  height: 6px;
`

const Header = () => {
  const dispatch = useDispatch()
  
  function handleLogout() {
    dispatch({
      type: 'LOGOUT',
      payload: {
        refreshToken: '',
        token: '',
        type: ''
      }
    })
  }

  return (
    <HeaderContent>
      <ButtonLogo>
        <TGL>TGL</TGL>
        <LineTitle></LineTitle>
      </ButtonLogo>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Feather name="log-out" size={28} color="#C1C1C1" />
      </TouchableOpacity>
    </HeaderContent>
  )
}

export default Header