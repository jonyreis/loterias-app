import React from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import convertToCurrency from '../../utils/convertToCurrency'

import { AntDesign, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons'
import Separator from '../Separator'
import {
  CartContainer,
  CartText,
  TextH3,
  BtnClose, 
  Bets, 
  Bet, 
  ButtonnRemoveBet, 
  BetInfo, 
  ArrayNumbers,
  Numbers,
  DateAndPrice,
  DatePrice,
  Type,
  TotalText,
  TextItalic,
  Save,
  ButtonSave,
  SaveText
} from './styles'

interface IListBetProps {
  numbers: string
  type: string
  color: string
  price: number
  key: string
  date: any
}

interface ICartProps {
  listBet: Array<IListBetProps>
  onHandleDeleteBet(indexArray: number): void
  onHandleTotalPrice(): number
  onHandleSave(): void
}

const Cart = ({
  listBet, 
  onHandleDeleteBet, 
  onHandleTotalPrice, 
  onHandleSave 
}: ICartProps) => {
  const { betsOnCart } = useSelector((state: RootStateOrAny) => state)
  
  const dispatch = useDispatch()
  
  function handleCloseCart() {
    dispatch({
      type: 'CART_OFF',
      payload: false
    })
  }

  return (
    <CartContainer>
      <CartText>
        <AntDesign name="shoppingcart" size={32} color="#B5C401" />
        <TextH3>CART</TextH3>
      </CartText>
      <BtnClose onPress={() => handleCloseCart()}>
        <Ionicons name="close" size={32} color="#B5C401" />
      </BtnClose>
      <Bets>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          {listBet.map((item: IListBetProps, index: number) => 
            <Bet key={item.key} style={{ marginTop: 12, marginBottom: 12 }}>
              <Separator color={item.color} />
              <BetInfo style={{ marginLeft: 16 }}>
                <ArrayNumbers style={{ marginTop: 0, marginBottom: 8 }}>
                  <Numbers>{String(item.numbers)}</Numbers>
                </ArrayNumbers>
                <DateAndPrice>
                  <DatePrice>{item.date} {convertToCurrency(item.price || 0)} </DatePrice>
                  <ButtonnRemoveBet onPress={() => onHandleDeleteBet(index)}>
                    <FontAwesome5 name="trash-alt" size={18} color="#707070" />
                  </ButtonnRemoveBet>
                </DateAndPrice>
                <Type style={{ color: item.color }} >{item.type}</Type>
              </BetInfo>
            </Bet>
          )}
        </ScrollView>
      </Bets>
      <TotalText>
        <TextItalic>Cart</TextItalic> Total: R$ {onHandleTotalPrice().toFixed(2)}
      </TotalText>
      <Save>
        <ButtonSave onPress={() => onHandleSave()}>
          <SaveText>Save</SaveText>
          <Feather name="arrow-right" style={{  marginLeft: 16 }}  size={28}  color="#B5C401" />
        </ButtonSave>
      </Save>
    </CartContainer>
  )
}

export default Cart
