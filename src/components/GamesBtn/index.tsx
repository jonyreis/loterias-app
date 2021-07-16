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

interface IGamesBtnProps {
  selectedFilter: Array<string>
  setSelectedFilter: React.Dispatch<React.SetStateAction<Array<string>>>
}


const GamesBtn = ({ selectedFilter, setSelectedFilter }: IGamesBtnProps ) => {
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
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      )}
    </CheckboxContent>
  )
}

export default GamesBtn
