import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import styled from 'styled-components/native'

import MyCheckbox from './MyCheckbox'



const CheckboxContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin: 15px auto 0;
`


const GamesBtn = () => {
  const { games } = useSelector((state: RootStateOrAny) => state)

  return (
    <CheckboxContent>
      {games.map((item: {
        id: number,
        type: string,
        color: string,
        description: string,
        maxNumber: number,
        minCartValue: number,
        price: number,
        range: number
      }) =>
        <MyCheckbox
          key={item.id}
          title={item.type}  
          color={item.color}
        />
      )}
    </CheckboxContent>
  )
}

export default GamesBtn
