import React from 'react'

import { Feather } from '@expo/vector-icons'
import { Button, ButtonText } from './styles'
interface IButtonFormProps {
  navigation: any
  to: string
  nameButton: string
  formRef?: any
}

const ButtonForm = ({ navigation, to, nameButton, formRef }: IButtonFormProps) => {
  return (
    <Button onPress={formRef ? () => formRef.current?.submitForm() : () => navigation.navigate(to)}>
      <ButtonText>
        {nameButton}
      </ButtonText>
      <Feather name="arrow-right" size={28}  color="#B5C401" />
    </Button>
  )
}

export default ButtonForm