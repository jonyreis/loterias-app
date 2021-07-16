import styled from 'styled-components/native'

export const NewBetContent = styled.View`
  padding: 0 20px;
`

export const NewBetText = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ChooseGame = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 17px;
  line-height: 17px;
  font-weight: 400;
`

export const DescriptionGame = styled.Text`
  color: #868686;
  font-size: 17px;
  font-style: italic;

  margin: 40px 0;
`

export const TextDescription = styled.Text`
  color: #868686;
  font-style: italic;
`

export const ActionButtonsMobileContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-width: 100%;
`

export const ActionButtonsMobile = styled.TouchableOpacity`
  border: 2px solid #B5C401;
  border-radius: 10px;
  background-color: transparent;
  color: #27c383;
  font-weight: 500;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px 5px;
  height: 32px;
`

export const TextActionButton = styled.Text`
  color: #B5C401;
  font-size: 13px;
  font-weight: bold;
`

export const CartButton = styled.TouchableOpacity`
  background-color: #B5C300;
  border-radius: 10px;

  
  flex-direction: row;
  align-items: center;
  padding: 8px;
  height: 32px;
`

export const TextCartButton = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`

interface INumberContainerProps {
  numbersTop: boolean
}

export const NumbersContainer = styled.View<INumberContainerProps>`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${props => props.numbersTop && '32px'};
`
