import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import Form from '../../components/Form'
import ButtonRedirect from '../../components/ButtonRedirect'

import api from '../../services/api';

import { Container, LogoTGL, Title, LineTitle, Footer } from './styles'


const ForgotPassword = ({ navigation }: any) => {
  async function handleForgotPassword(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const resetPassword = {
      email: event.target[0].value,
      redirect_url: 'http://localhost:3000/reset-password'
    }

    await api.post('/passwords', resetPassword)
      .then((response) => {
        if (response.status === 204) {
          alert('Enviamos um email para você!')
        }
      })
      .catch((error) => {
        console.log(error)
        alert('E-mail não cadastrado!')
      })

    event.target[0].value = ''
  }

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
