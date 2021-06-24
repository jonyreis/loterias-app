import React from 'react'
import { Link } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { Platform, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

import Input from '../Input/index'
import TitleForm from '../../components/TittleForm'

const FormContent = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
`

const LinkForgetPassword = styled.Text`
  color: #C1C1C1;
  font-size: 14px;
  font-style: italic;
`
const LinkRedirect = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

const ButtonForm = styled.TouchableOpacity`
  padding: 16px 16px 32px;
`

const ButtonText = styled.Text`
  color: #B5C401;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

const FormComponent = () => {
  
  const formRef = React.useRef<any>(null)

  function handleSubmit(data: any) {
    console.log(data);
    alert('ok')
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TitleForm title="Authentication"/>
      <FormContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email" 
            label="Email" 
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input name="password" label="Password" secureTextEntry={true} />
          <Link 
            to="#" 
            style={{
              marginTop: 8, 
              marginBottom: 8, 
              marginLeft: 'auto', 
              marginRight: 20,
              padding: 4
            }} ><LinkForgetPassword>I forget my password</LinkForgetPassword></Link>
          <ButtonForm onPress={() => formRef.current?.submitForm()}>
            <ButtonText>Log In <Feather name="arrow-right" size={26}  color="#B5C401" /></ButtonText>
          </ButtonForm>
        </Form>
      </FormContent>
      <Link 
        to="#" 
        style={{
          marginTop: 16, 
          textAlign: 'center',
          padding: 4
        }} ><LinkRedirect>Sign Up <Feather name="arrow-right" size={26}  color="#707070" /></LinkRedirect>
      </Link>
    </KeyboardAvoidingView>
  );
}

export default FormComponent
