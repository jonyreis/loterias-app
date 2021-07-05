import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Home from '../screens/Home'
import NewBet from '../screens/NewBet'
import Account from '../screens/Account'
import ButtonNewBet from '../components/ButtonNewBet'
import Header from '../components/Header';

const Tab = createBottomTabNavigator()

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Feather name="home" size={size} color={color} />
            
            case 'NewBet':
              return <ButtonNewBet />
            case 'Account':
              return <Feather name="user" size={size} color={color} />

            default:
              return <Feather name="circle" size={size} color={color} />
          }
        }
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#A5A5A5',
          iconStyle: { marginTop: 12 },
          labelStyle: { fontSize: 14, marginBottom: 16 },
          style: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: 70,
            position: "absolute",
            bottom: 0
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="NewBet" component={NewBet} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AuthRoutes
