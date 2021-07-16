import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import Form from '../../components/Form'
import ButtonRedirect from '../../components/ButtonRedirect'

import { Container, LogoTGL, Title, LineTitle, Footer } from './styles'


const SignUp = ({ navigation }: any) => {
  return (
    <Container>
    <LogoTGL >
      <Title>TGL</Title>
      <LineTitle></LineTitle>
    </LogoTGL>
    <View>
      <Form 
        navigation={navigation}
        titleForm="Registration"
      />
      <ButtonRedirect navigation={navigation} to="Login" nameButton="Back" />
    </View>
    <Footer>Copyright 2020 Luby Software</Footer>
  </Container>
  )
}

export default SignUp