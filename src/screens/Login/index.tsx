import React from 'react'
import styled from 'styled-components/native'

import TitleForm from '../../components/TittleForm'
import Form from '../../components/Form'

const Container = styled.View`
  background-color: #F7F7F7;
  width: 100%;
  height: 100%;
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

const Login = () => {
  return (
    <Container>
      <LogoTGL >
        <Title>TGL</Title>
        <LineTitle></LineTitle>
      </LogoTGL>
      <TitleForm title="Authentication"/>
    </Container>
  )
}

export default Login
