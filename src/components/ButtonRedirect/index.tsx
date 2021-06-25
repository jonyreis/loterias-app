import React from 'react'
import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

const Button = styled.TouchableOpacity`
  padding: 16px 16px 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  color: #707070;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 0 8px;
`

interface IButtonRedirectProps {
  navigation: any
  to: string
  nameButton: string
}


const ButtonRedirect = ({ navigation, to, nameButton }: IButtonRedirectProps) => {
  return (
    <Button onPress={() => navigation.navigate(to)}>
      {to === "Login" && <Feather name="arrow-left" size={28}  color="#707070" />}
      <ButtonText>
        {nameButton}
      </ButtonText>
      {to !== "Login" && <Feather name="arrow-right" size={28}  color="#707070" />}
    </Button>
  )
}

export default ButtonRedirect