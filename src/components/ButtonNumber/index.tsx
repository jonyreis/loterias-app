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
  numbersTop: boolean
}

const ButtonNumber = ({ 
  value, 
  selected, 
  selectGame, 
  arraySelectedNumbers, 
  setArraySelectedNumbers,
  numbersTop
}: IButtonNumberProps) => {
  const [buttonSelect, setButtonSelect] = React.useState(false)

  React.useEffect(() => {

  }, [arraySelectedNumbers])


  function handleSelectNumber(value: number) {
    if (arraySelectedNumbers.indexOf(value) === -1 && arraySelectedNumbers.length < selectGame.maxNumber) {
      setArraySelectedNumbers((prevState: any) => [...prevState, value])
      setButtonSelect(true)
    } else if (arraySelectedNumbers.indexOf(value) !== -1) {
      let newArray = arraySelectedNumbers

      const indexSelect = arraySelectedNumbers.indexOf(value)
      newArray.splice(indexSelect, 1)
      
      setArraySelectedNumbers([...newArray])
      setButtonSelect(false)
    } else {
      alert(`A ${selectGame.type} pode ter até ${selectGame.maxNumber} números selecionados`)
    }
  }

  return (
    <ButtonNumberContainer
      numbersTop={numbersTop}
      onPress={() => handleSelectNumber(value)}
      data-js="button-number"
      style={{ backgroundColor: selected ? selectGame.color : "#adc0c4"}}
    >
      <NumberText numbersTop={numbersTop}>{String(value).padStart(2, '0')}</NumberText>
      {numbersTop ? <X>x</X> : null}
    </ButtonNumberContainer>
  )

}

export default ButtonNumber
