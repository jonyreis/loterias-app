import React from 'react'
import styled from 'styled-components/native'

const Title = styled.Text`
  color: #707070;
  font-size: 35px;
  font-style: italic;
  font-weight: 700;
  
  margin: 46px auto 26px;
`

interface ITitleFormProps {
  title: string
}

const TitleForm = ({ title }: ITitleFormProps) => {
  return (
    <Title>{title}</Title>
  )
}

export default TitleForm