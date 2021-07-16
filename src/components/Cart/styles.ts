import styled from 'styled-components/native'

interface ICartContainerProps {
  cartMobile: boolean
}

export const CartContainer = styled.View<ICartContainerProps>`
  display: ${props => props.cartMobile ? 'block' : 'none'};
  background-color: #fff;
  border: 1px solid #e2e2e2;

  min-width: 300px;
  max-width: 320px;
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
  padding: 32px 32px 0;
  position: fixed;
  top: 0;
  right: 0;
`

export const CartText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 110px;
`

export const TextH3 = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 24px;
  font-weight: bold;
`

export const BtnClose = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 32px;
  right: 16px;
`

export const Bets = styled.View`
  max-height: calc(80vh - 260px);
`

export const Bet = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Separator = styled.View`
  content: "";
  display: inline-block;
  border-radius: 100px 0px 0px 100px;
  width: 4px;
  height: 86px;
`

export const BetInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-self: left;
  text-align: left;

  width: 196px;
`

export const ArrayNumbers = styled.View`
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;

  max-width: 100%;
`

export const Numbers = styled.Text`
  color: #868686;

  font-size: 12px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0px;

  &::after {
    content: ',';
    display: inline-block;
    
    margin-right: 4px;
    &:last-child {
      display: none;
    }
  }
  &:last-child {
    &::after {
    display: none;
    }
  }
`

export const DateAndPrice = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const DatePrice = styled.Text`
  color: #868686;
  font-weight: 300;
  font-size: 12px;
`

export const Type = styled.Text`
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
`

export const ButtonnRemoveBet = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 4px;
`

export const TotalText = styled.Text`
  background-color: #fff;
  color: #868686;

  padding: 4px;
  position: absolute;
  bottom: 100px;
  left: 30px;

  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
`

export const TextItalic = styled.Text`
  font-style: italic;
  font-weight: bold;
`

export const Save = styled.View`
  background-color: #f4f4f4;
  border: 1px solid #e2e2e2;
  /* border-radius: 0 0 8px 8px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;

  position: absolute;
  bottom: 0;
  left: 0;
`

export const ButtonSave = styled.TouchableOpacity`
  border: none;

  background-color: transparent;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 32px;
`

export const SaveText = styled.Text`
  color: #B5C401;
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
  font-family: sans-serif;
`