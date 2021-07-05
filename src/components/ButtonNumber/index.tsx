import React from 'react'
import { ButtonNumberContainer, NumberText } from './styles'

interface IButtonNumberProps {
  value: number,
  selected: boolean,
  selectedGame: any,
  arraySelectedNumbers?: any,
  setArraySelectedNumbers?: any
}

const ButtonNumber = ({ 
  value, 
  selected, 
  selectedGame, 
  arraySelectedNumbers, 
  setArraySelectedNumbers 
}: IButtonNumberProps) => {
  function handleSelectNumber(btnNumber: any) {
    const num = Number(btnNumber.currentTarget.textContent)

    if (arraySelectedNumbers.indexOf(num) === -1 && arraySelectedNumbers.length < selectedGame.maxNumber) {
      btnNumber.currentTarget.style.background = selectedGame.color

      setArraySelectedNumbers((prevState: any) => [...prevState, num])
    } else if (arraySelectedNumbers.indexOf(num) !== -1) {
      btnNumber.currentTarget.style.background = '#adc0c4'

      let newArray = arraySelectedNumbers

      const indexSelect = arraySelectedNumbers.indexOf(num)
      newArray.splice(indexSelect, 1)

      setArraySelectedNumbers([...newArray])
    } else {
      alert(`A ${selectedGame.type} pode ter até ${selectedGame.maxNumber} números selecionados`)
    }
  }

  return (
    <ButtonNumberContainer
      selected={selected}
      onPress={(e) => handleSelectNumber(e)}
      data-js="button-number"
    >
      <NumberText>{String(value).padStart(2, '0')}</NumberText>
    </ButtonNumberContainer>
  )

}

export default ButtonNumber
