import React from 'react'
import { View } from 'react-native'

import Form from '../../components/Form'
import ButtonRedirect from '../../components/ButtonRedirect'

import { Container, LogoTGL, Title, LineTitle, Footer } from './styles'


const ForgotPassword = ({ navigation }: any) => {
  return (
    <Container>
    <LogoTGL >
      <Title>TGL</Title>
      <LineTitle></LineTitle>
    </LogoTGL>
    <View>
      <Form 
        navigation={navigation}
        titleForm="Forgot Password"
      />
      <ButtonRedirect navigation={navigation} to="Login" nameButton="Back" />
      <ButtonRedirect navigation={navigation} to="SignUp" nameButton="SignUp" />
    </View>
    <Footer>Copyright 2020 Luby Software</Footer>
  </Container>
  );
};

export default ForgotPassword;
