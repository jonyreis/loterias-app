import styled from 'styled-components/native'

interface ICartContainerProps {
  cartMobile: boolean
}

export const CartContainer = styled.View<ICartContainerProps>`
  display: ${props => props.cartMobile ? 'block' : 'none'};
  background-color: #fff;
  border: 1px solid #e2e2e2;

  min-width: 300px;
  max-width: 340px;
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
  padding: 32px 16px 0;
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
  justify-content: space-between;

  margin: 16px 0;
`

export const ButtonnRemoveBet = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 4px;
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

  margin-left: 14px;
`

export const ArrayNumbers = styled.View`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  word-break: break-word;
  
  h4 {
    color: #868686;

    font-size: 15px;
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
  }
`

export const TypeAndPrice = styled.View`
  strong {
    color: #7f3992;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
  }

  span {
    color: #868686;
    margin-left: 8px;
  }
`

export const Total = styled.View`
  background-color: #fff;
  color: #868686;

  padding: 4px;
  position: absolute;
  bottom: 140px;

  h2 {
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    span {
      font-style: italic;
      font-weight: bold;
    }
  }
`

export const Save = styled.View`
  background-color: #f4f4f4;
  border: 1px solid #e2e2e2;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;

  position: absolute;
  bottom: 0;
  left: 0;

  button {
    border: none;

    background-color: transparent;
    color: #27c383;
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    padding: 32px;
  }

  img {
    color: #27c383;
    width: 24px;
  }
`