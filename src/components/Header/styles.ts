import styled from 'styled-components/native'

export const HeaderContent = styled.View`
  background-color: #fff;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
`

export const ButtonLogo = styled.TouchableOpacity`
  max-width: 75px;
`

export const TGL = styled.Text`
  color: #707070;
  font-size: 30px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`

export const LineTitle = styled.View`
  background-color: #B5C401;
  border-radius: 6px;
  width: 75px;
  height: 6px;
`

interface IShoppingCartAndLogoutProps {
  shoppingCart: boolean
}

export const ShoppingCartAndLogout = styled.View<IShoppingCartAndLogoutProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${props => props.shoppingCart ? '80px' : '28px'};
`