import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { Platform, KeyboardAvoidingView } from 'react-native'
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

const URL = "http://127.0.0.1:3333"

const FormComponent = ({ titleForm }: any) => {
  const navigation = useNavigation()
  const formRef = React.useRef<any>(null)

  async function handleSubmit(data: any, { reset }: any) {
    const user = {
      username: data.name,
      email: data.email,
      password: data.password,
    }
  
    await api.post('/register', user)
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigation.navigate('Login')
      })
      .catch((error) => {
        alert('E-mail ou Nome já cadastrado!')
        alert(error.message)
        console.log(error)
        return
      })
    reset()
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
              autoCorrect={false}
              autoCapitalize="none"
            />
          }
          <Input
            name="email" 
            label="Email" 
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input name="password" label="Password" secureTextEntry={true} />
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
