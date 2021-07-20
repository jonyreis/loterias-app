import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import MyCheckbox from './MyCheckbox'

import { CheckboxContent } from './styles'
interface IGamesBtnProps {
  betFilter: Array<string>
  setBetFilter: React.Dispatch<React.SetStateAction<Array<string>>>
}


const GamesBtn = ({ betFilter, setBetFilter }: IGamesBtnProps ) => {
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
          betFilter={betFilter}
          setBetFilter={setBetFilter}
        />
      )}
    </CheckboxContent>
  )
}

export default GamesBtn
