import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import { TouchableOpacity } from 'react-native'

import { AntDesign, Feather } from '@expo/vector-icons'

import { HeaderContent, ButtonLogo, TGL, LineTitle, ShoppingCartAndLogout } from './styles'

const Header = () => {
  const { cart } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()
  
  function handleCart() {
    if (cart) {
      dispatch({
        type: 'CART_OFF',
        payload: false
      })
    } else {
      dispatch({
        type: 'CART_ON',
        payload: true
      })
    }
  }

  function handleLogout() {
    dispatch({
      type: 'LOGOUT',
      payload: {
        refreshToken: '',
        token: '',
        type: ''
      }
    })
  }

  return (
    <HeaderContent>
      <ButtonLogo>
        <TGL>TGL</TGL>
        <LineTitle></LineTitle>
      </ButtonLogo>
      <ShoppingCartAndLogout shoppingCart={true}>
        <TouchableOpacity onPress={() => handleCart()}>
          <AntDesign name="shoppingcart" size={32} color="#B5C401" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Feather name="log-out" size={28} color="#C1C1C1" />
        </TouchableOpacity>
      </ShoppingCartAndLogout>
    </HeaderContent>
  )
}

export default Header
