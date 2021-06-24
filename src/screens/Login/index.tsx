import React from 'react'
import styled from 'styled-components/native'

import Form from '../../components/Form'

const Container = styled.View`
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 8%;
  justify-content: space-around;
`

const LogoTGL = styled.View`
  margin: 40px auto 0;
`

const Title = styled.Text`
  color: #707070;
  text-align: center;
  font-style: italic;
  font-size: 44px;
  font-weight: 700;
  margin: auto;
`;

const LineTitle = styled.View`
  background-color: #B5C401;
  border-radius: 6px;
  width: 107px;
  height: 7px;
`

const Footer = styled.Text`
  color: #707070;
  font-size: 16px;
  text-align: center;
`

const Login = () => {
  return (
    <Container>
      <LogoTGL >
        <Title>TGL</Title>
        <LineTitle></LineTitle>
      </LogoTGL>
      <Form />
      <Footer>Copyright 2020 Luby Software</Footer>
    </Container>
  )
}

export default Login
