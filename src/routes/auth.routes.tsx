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
        tabBarOptions={{
          activeTintColor: '#B5C401',
          inactiveTintColor: '#A5A5A5',
          iconStyle: { marginTop: 12 },
          labelStyle: { fontSize: 14, marginBottom: 16 },
          style: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: 70,
            position: "absolute",
            bottom: 0,
          }
        }}
      >
        <Tab.Screen 
          options={{
            tabBarIcon: ((props) => <Feather name="home" size={props.size} color={props.color} />)
          }}
          name="Home" 
          component={Home} 
        />
        <Tab.Screen 
          options={{
            tabBarIcon: (() => <ButtonNewBet />),
            title: ""
          }}
          name="NewBet" 
          component={NewBet} 
        />
        <Tab.Screen 
          options={{
            tabBarIcon: ((props) => <Feather name="user" size={props.size} color={props.color} />),
          }}
          name="Account" 
          component={Account} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AuthRoutes
