import styled from 'styled-components/native'


export const ButtonNumberContainer = styled.Pressable`
  border: none;
  border-radius: 30px;
  color: #fff;

  font-weight: bold;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin: 6px;
`

export const NumberText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`

export const X = styled.Text`
  color: #fff;
  font-size: 10px;
  position: absolute;
  top: 6px;
  right: 8px;
`