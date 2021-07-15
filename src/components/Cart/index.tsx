import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import convertToCurrency from '../../utils/convertToCurrency'


import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'

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
  Total, 
  Save 
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
          <Bet data-js="bet" key={item.key}>
            <Separator style={{ backgroundColor: item.color }}></Separator>
            <BetInfo>
              <ArrayNumbers>
                <Numbers>{String(item.numbers)}</Numbers>
              </ArrayNumbers>
              <DateAndPrice>
                <DatePrice>{item.date} {convertToCurrency(item.price)} </DatePrice>
                <ButtonnRemoveBet onPress={() => onHandleDeleteBet(index)}>
                  <FontAwesome5 name="trash-alt" size={20} color="#707070" />
                </ButtonnRemoveBet>
              </DateAndPrice>
              <Type style={{ color: item.color }} >{item.type}</Type>
            </BetInfo>
          </Bet>
        )}
      </Bets>
      <Total>
        <h2 data-js="total-price">
          <span>Cart</span> Total: {convertToCurrency(onHandleTotalPrice())}
        </h2>
      </Total>
      <Save>
        <button type="button" onClick={() => onHandleSave()}>
          Save 
        </button>
      </Save>
    </CartContainer>
  )
}

export default Cart
