import React from 'react'

import { Feather } from '@expo/vector-icons'
import { Button, ButtonText } from './styles'
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