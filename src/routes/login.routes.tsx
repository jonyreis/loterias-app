import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword'


const Stack = createStackNavigator()

const LoginRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default LoginRoutes