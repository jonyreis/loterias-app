import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Home from '../screens/Home'
import NewBet from '../screens/NewBet'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()

const AuthRoutes = () => {
  const [iconName, setIconName] = React.useState<string>('home')
  
  return (
    <NavigationContainer>
      <Tab.Navigator 
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size}) => {
          switch (route.name) {
            case 'Home':
              setIconName('home')
              break;

            case 'Account':
              setIconName('home')
              break;

            default:
              setIconName('circle')
              break;
          }

            return <Feather name="home" size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#A5A5A5',
          // iconStyle: { marginTop: '12px' },
          // labelStyle: { fontSize: '14px', marginBottom: '16px' },
          // style: {
          //   borderTopLeftRadius: '16px',
          //   borderTopRightRadius: '16px',
          //   height: '80px',
          //   position: "absolute",
          //   bottom: 0
          // }
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




// screenOptions={({ route }) => ({
//   tabBarIcon: ({ color, size }) => {
//     let iconName;

//     switch (route.name) {
//       case 'Home':
//         iconName = 'home';
//         break;
//       case 'Account':
//         iconName = 'user';
//         break;
//       default:
//         iconName = 'circle';
//         break;
//     }

//     return <Feather name={iconName} size={size} color={color} />

//   },
// })}
// tabBarOptions={{
//   activeTintColor: '#000',
//   inactiveTintColor: '#A5A5A5',
//   iconStyle: { marginTop: '12px' },
//   labelStyle: { fontSize: '14px', marginBottom: '16px' },
//   style: {
//     borderTopLeftRadius: '16px',
//     borderTopRightRadius: '16px',
//     height: '80px',
//     position: "absolute",
//     bottom: 0
//   }
// }}