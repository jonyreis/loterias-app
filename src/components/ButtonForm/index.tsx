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
  color: #B5C401;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-right: 8px;
`

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