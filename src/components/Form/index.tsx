import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { Platform, KeyboardAvoidingView } from 'react-native'
import { useDispatch } from 'react-redux'

import api from '../../services/api'

import Input from '../Input/index'
import TitleForm from '../../components/TittleForm'
import ButtonForm from '../ButtonForm'


import { FormContent, LinkForgetPassword, TextForgetPassword } from './styles'

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
      console.log('validate ok')
    })
    .catch((err) => {
      alert(`${err.errors}`)
      err.errors
    })
    
    reset()
  }

  async function handleRequest(request: string, user: { username?: string; email: string; password: string }) {
    console.log(user)
    switch (request) {
      case "Registration":
        await api.post('/register', user)
        .then((res) => {
          alert('Usuário cadastrado com sucesso!')
          navigation.navigate('Login')
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
        break;
    
      case "Authentication":
        try {
          const response = await api.post('/sessions', { email: user.email, password: user.password })
          dispatch({
            type: 'USER_AUTH',
            payload: response.data
          })
          storeData(response.data.token)
        } catch (error) {
          console.log(error)
          alert(error.message)
        }
        break;
      
      case "Forgot Password":
        const resetPassword = {
          email: user.email,
          redirect_url: 'http://localhost:3000/reset-password'
        }
        try {
          const response = await api.post('/passwords', resetPassword)
          if (response.status === 204) {
            alert('Enviamos um email de recuperação de senha para ' + user.email)
          }
        } catch (error) {
          console.log(error)
          alert('E-mail não cadastrado!')
        }
        break;

      default:
        break;
    }
  }

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@auth', value)
    } catch (e) {
      // saving error
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
          {titleForm !== "Forgot Password" &&
            <Input name="password" label="Password" />
          }
          {titleForm === "Authentication" &&
            <LinkForgetPassword onPress={() => navigation.navigate("ForgotPassword")} >
              <TextForgetPassword>I forget my password</TextForgetPassword>
            </LinkForgetPassword>
          }
          {titleForm === "Authentication" && <ButtonForm navigation={navigation} to="Login" nameButton="Login" formRef={formRef}/>}
          {titleForm === "Registration" && <ButtonForm navigation={navigation} to="Login" nameButton="Register" formRef={formRef}/>}
          {titleForm === "Forgot Password" && <ButtonForm navigation={navigation} to="Login" nameButton="Send" formRef={formRef}/>}
        </Form>
      </FormContent>
    </KeyboardAvoidingView>
  );
}

export default FormComponent
