import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { Platform, KeyboardAvoidingView } from 'react-native'
import { useDispatch } from 'react-redux'

import styled from 'styled-components/native'

import api from '../../services/api'

import Input from '../Input/index'
import TitleForm from '../../components/TittleForm'
import ButtonForm from '../ButtonForm'

const FormContent = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
`

const LinkForgetPassword= styled.TouchableOpacity`
  margin: 8px 20px 8px auto;
`

const TextForgetPassword = styled.Text`
  color: #C1C1C1;
  font-size: 14px;
  font-style: italic;
`

const FormComponent = ({ titleForm }: any) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const formRef = React.useRef<any>(null)

  async function handleSubmit(data: { name: string; email: string; password: string }, { reset }: any) {
    const user = {
      username: data.name,
      email: data.email,
      password: data.password,
    }

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    })

    await schema.validate({ email: data.email }, {
      abortEarly: false,
    }).then(() => {
      handleRequest(titleForm, user)
    })
    .catch((err) => {
      alert(`${err.errors}`)
      err.errors
    })
    
    reset()
  }

  async function handleRequest(request: string, user: { username?: string; email: string; password: string }) {
    switch (request) {
      case "Registration":
        await api.post('/register', user)
        .then(() => {
          alert('Usuário cadastrado com sucesso!')
          navigation.navigate('Login')
        })
        .catch((error) => {
          alert(error.message)
        })
        break;
    
      case "Authentication":
        await api.post('/sessions', { email: user.email, password: user.password })
        .then((response) => {
          alert('Login feito com sucesso!')
          if (response.status === 200) {
            dispatch({
              type: 'USER_AUTH',
              payload: response.data
            })
          }
        })
        .catch((error) => {
          alert(error.message)
        })
        break;
      default:
        break;
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TitleForm title={titleForm}/>
      <FormContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {titleForm === "Registration" &&
            <Input
              name="name" 
              label="Nome" 
            />
          }
          <Input
            name="email" 
            label="Email" 
          />
          <Input name="password" label="Password" />
          {titleForm === "Authentication" &&
            <LinkForgetPassword onPress={() => navigation.navigate("ForgotPassword")} >
              <TextForgetPassword>I forget my password</TextForgetPassword>
            </LinkForgetPassword>
          }
          {titleForm === "Authentication" && <ButtonForm navigation={navigation} to="Login" nameButton="Login" formRef={formRef}/>}
          {titleForm === "Registration" && <ButtonForm navigation={navigation} to="Login" nameButton="Register" formRef={formRef}/>}
          {titleForm === "Forgot Password" && <ButtonForm navigation={navigation} to="Login" nameButton="Send"/>}
        </Form>
      </FormContent>
    </KeyboardAvoidingView>
  );
}

export default FormComponent
