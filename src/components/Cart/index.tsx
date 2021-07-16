import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import convertToCurrency from '../../utils/convertToCurrency'


import { AntDesign, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons'

import { 
  CartContainer,
  CartText,
  TextH3,
  BtnClose, 
  Bets, 
  Bet, 
  ButtonnRemoveBet, 
  Separator, 
  BetInfo, 
  ArrayNumbers,
  Numbers,
  DateAndPrice,
  DatePrice,
  Type,
  TotalText,
  TextItalic,
  Save,
  ButtonSave
} from './styles'

interface IListBetProps {
  numbers: string
  type: string
  color: string
  price: number
  key: string
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
  const { cart, bets } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()
  
  function handleCloseCart() {
    dispatch({
      type: 'CART_OFF',
      payload: false
    })
  }

  return (
    <CartContainer cartMobile={cart}>
      <CartText>
        <AntDesign name="shoppingcart" size={32} color="#B5C401" />
        <TextH3>CART</TextH3>
      </CartText>
      <BtnClose onPress={handleCloseCart}>
        <Ionicons name="close" size={32} color="#B5C401" />
      </BtnClose>
      <Bets data-js="bets">
        {bets.map((item: { key: string | number | null | undefined; color: any; numbers: any; type: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; date: any; price: number; }, index: number) => 
          <Bet data-js="bet" key={item.key} style={{ marginTop: 12, marginBottom: 12 }}>
            <Separator style={{ backgroundColor: item.color }}></Separator>
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
      </Bets>
        <TotalText>
          <TextItalic>Cart</TextItalic> Total: {convertToCurrency(onHandleTotalPrice() || 0)}
        </TotalText>
      <Save style={{ borderRadius: 8 }}>
        <ButtonSave onPress={() => onHandleSave()}>
          Save 
          <Feather name="arrow-right" style={{  marginLeft: 16 }}  size={28}  color="#B5C401" />
        </ButtonSave>
        
      </Save>
    </CartContainer>
  )
}

export default Cart
