import React from 'react'

import SelectGame from '../../components/SelectGame'
import ButtonNumber from '../../components/ButtonNumber'
import { 
  NewBetContent, 
  NewBetText,
  ChooseGame,
  DescriptionGame,
  NumbersContainer,
  TextDescription
} from './styles'

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


const NewBet = () => {
  const [arraySelectedNumbers, setArraySelectedNumbers] = React.useState<number[]>([])
  const [selectGame, setSelectGame] = React.useState<IGameProps>({
    id: 0,
    type: '',
    color: '',
    description: '',
    maxNumber: 0,
    minCartValue: 0,
    price: 0,
    range: 0
  })

  return (
    <NewBetContent>
      <NewBetText>New bet LOTOMANIA</NewBetText>
      <ChooseGame>Choose a game</ChooseGame>
      <SelectGame selectGame={selectGame} setSelectGame={setSelectGame} />
      <DescriptionGame>
        <TextDescription style={{fontSize: 16, fontWeight: 'bold'}}>Fill your bet</TextDescription>
        <TextDescription style={{fontSize: 14 }}>{selectGame.description}</TextDescription>
      </DescriptionGame>
      <NumbersContainer>
        {Array(selectGame.range).fill('').map((item, index) =>
          <ButtonNumber
            value={index + 1} 
            key={index + 1}
            selected={arraySelectedNumbers.indexOf(index + 1) !== -1 ? true : false}
            selectedGame={selectGame}
            arraySelectedNumbers={arraySelectedNumbers}
            setArraySelectedNumbers={setArraySelectedNumbers}
          />
        )}
      </NumbersContainer>
    </NewBetContent>
  )
}

export default NewBet