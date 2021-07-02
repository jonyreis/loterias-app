import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { CheckboxContent, Pressable, Text } from './styles'


interface IGameProps {
  id: number
  type: string
  color: string
  description: string
  maxNumber: number
  minCartValue: number
  price: number
  range: number
}

interface ISelectGameProps {
  selectGame: any
  setSelectGame: React.Dispatch<React.SetStateAction<IGameProps>>
}


const SelectGame = ({ selectGame, setSelectGame }: ISelectGameProps) => {
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
        <Pressable
          onPress={() => setSelectGame(item)}
          style={{ 
            backgroundColor: item.type === selectGame.type ? item.color : '#fff',
            borderWidth: 2,
            borderColor: item.color
          }} 
        >
          <Text style={{ color: item.type === selectGame.type ? '#fff' : item.color}}>
            {item.type}
          </Text>
         </Pressable>
      )}
    </CheckboxContent>
  )
}

export default SelectGame

