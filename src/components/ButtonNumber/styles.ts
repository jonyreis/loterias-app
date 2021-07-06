import styled from 'styled-components/native'


interface IButtonNumberContainerProps {
  numbersTop: boolean
}

export const ButtonNumberContainer = styled.Pressable<IButtonNumberContainerProps>`
  border: none;
  border-radius: 30px;
  color: #fff;

  font-weight: bold;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${props => props.numbersTop ? '40px' : '59px'};
  height: ${props => props.numbersTop ? '40px' : '59px'};
  margin: ${props => props.numbersTop ? '6px' : '8px'};
`

interface INumberTextProps {
  numbersTop: boolean
}

export const NumberText = styled.Text<INumberTextProps>`
  color: #fff;
  font-size: ${props => props.numbersTop ? '13px' : '18px'};
  font-weight: 700;
`