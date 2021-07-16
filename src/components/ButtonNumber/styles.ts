import styled from 'styled-components/native'


interface IButtonNumberContainerProps {
  numbersTop: boolean
}

export const ButtonNumberContainer = styled.Pressable<IButtonNumberContainerProps>`
  border: none;
  border-radius: 35px;
  color: #fff;

  font-weight: bold;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${props => props.numbersTop ? '40px' : '60px'};
  height: ${props => props.numbersTop ? '40px' : '60px'};
  margin: ${props => props.numbersTop ? '6px' : '5px'};
`

interface INumberTextProps {
  numbersTop: boolean
}

export const NumberText = styled.Text<INumberTextProps>`
  color: #fff;
  font-size: ${props => props.numbersTop ? '13px' : '18px'};
  font-weight: 700;
`

export const X = styled.Text`
  color: #fff;
  font-size: 10px;
  position: absolute;
  top: 3px;
  right: 8px;
`