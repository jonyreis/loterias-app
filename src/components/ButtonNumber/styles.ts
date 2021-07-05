import styled from 'styled-components/native'


interface IButtonNumberContainerProps {
  selected: boolean
}

export const ButtonNumberContainer = styled.Pressable<IButtonNumberContainerProps>`
  background-color: ${props => props.selected ? '#27c383' : '#adc0c4'};
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 59px;
  height: 59px;
  margin: 8px;
`

export const NumberText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`