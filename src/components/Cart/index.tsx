import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import convertToCurrency from '../../utils/convertToCurrency'


import { AntDesign, Ionicons } from '@expo/vector-icons'

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
  TypeAndPrice, 
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
        {bets.map((item: { key: React.Key | null | undefined; color: any; numbers: any; type: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: number; }, index: number) => 
          <Bet data-js="bet" key={item.key}>
            <ButtonnRemoveBet onPress={() => onHandleDeleteBet(index)}>
              {/* <img src={Trash} alt="trash" /> */}trash
            </ButtonnRemoveBet>
            {/* <Separator style={{background: item.color}}></Separator> */}
            <BetInfo>
              <ArrayNumbers>
                <h4>{String(item.numbers)}</h4>
              </ArrayNumbers>
              <TypeAndPrice>
                <strong style={{color: item.color}}>{item.type}</strong>
                <span>{convertToCurrency(item.price)}</span>
              </TypeAndPrice>
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
