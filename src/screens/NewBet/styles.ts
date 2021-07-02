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

  margin: 16px 0;
`;

export const ChooseGame = styled.Text`
  color: #707070;
  font-style: italic;
  font-size: 17px;
  line-height: 17px;
  font-weight: 400;
`

export const DescriptionGame = styled.View`
  color: #868686;
  font-size: 17px;
  font-style: italic;

  margin: 40px 0;
`

export const TextDescription = styled.Text`
  color: #868686;
  font-style: italic;
`

export const NumbersContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`


export const Bets = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px 0 230px;
`

export const Bet = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 16px 0;
`

interface ISeparatorProps {
  color: string
}

export const Separator = styled.View<ISeparatorProps>`
  border-radius: 100px;
  background-color: ${props => props.color};

  width: 6px;
  height: 94px;
  margin-right: 16px;
`

export const BetInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
`

export const Numbers = styled.Text`
  color: #868686;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0px;
  
  max-width: 100%;
`

export const DateAndPrice = styled.Text`
  color: #868686;
  font-size: 17px;
  font-weight: 400;
`

interface ITypeBetProps {
  color: string
}

export const TypeBet = styled.Text<ITypeBetProps>`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
`
