import React from 'react'
import { ButtonNumberContainer, NumberText, X } from './styles'

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

interface IButtonNumberProps {
  value: number,
  selected: boolean,
  selectGame: IGameProps,
  arraySelectedNumbers?: any,
  setArraySelectedNumbers?: any
}

const ButtonNumberSelected = ({ 
  value, 
  selected, 
  selectGame, 
  arraySelectedNumbers, 
  setArraySelectedNumbers
}: IButtonNumberProps) => {

  function handleSelectNumber(btnNumber: any) {
    const num = Number(btnNumber.currentTarget.textContent)

    if (arraySelectedNumbers.indexOf(num) === -1 && arraySelectedNumbers.length < selectGame.maxNumber) {
      setArraySelectedNumbers((prevState: any) => [...prevState, num])
    } else if (arraySelectedNumbers.indexOf(num) !== -1) {
      let newArray = arraySelectedNumbers

      const indexSelect = arraySelectedNumbers.indexOf(num)
      newArray.splice(indexSelect, 1)
      
      setArraySelectedNumbers([...newArray])
    } else {
      alert(`A ${selectGame.type} pode ter até ${selectGame.maxNumber} números selecionados`)
    }
  }

  return (
    <ButtonNumberContainer
      onPress={(e) => handleSelectNumber(e)}
      data-js="button-number"
      style={{ backgroundColor: selected ? selectGame.color : "#adc0c4"}}
    >
      <NumberText>{String(value).padStart(2, '0')} <X>x</X></NumberText>
    </ButtonNumberContainer>
  )

}

export default ButtonNumberSelected
