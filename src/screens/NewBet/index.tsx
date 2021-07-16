import React from 'react'
import { Text, ScrollView } from 'react-native'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

import { getDate } from '../../utils/getDate'
import api from '../../services/api'


import Cart from '../../components/Cart'
import SelectGame from '../../components/SelectGame'
import ButtonNumber from '../../components/ButtonNumber'
import { 
  NewBetContent, 
  NewBetText,
  ChooseGame,
  DescriptionGame,
  NumbersContainer,
  TextDescription,
  ActionButtonsMobile,
  ActionButtonsMobileContainer,
  TextActionButton,
  CartButton,
  TextCartButton
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


const NewBet = ({ navigation }: any) => {
  const [listBet, setListBet] = React.useState<Array<any>>([])
  const [arraySelectedNumbers, setArraySelectedNumbers] = React.useState<Array<number>>([])
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

  const { auth, cart } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    setArraySelectedNumbers([])
  }, [selectGame])

  React.useEffect(() => {
    dispatch({
      type: 'ADD_BET_TO_CART',
      payload: listBet
    })
  }, [listBet])

  // React.useEffect(() => {
  //   if (arraySelectedNumbers.length > 0) {
  //     dispatch({
  //       type: 'IS_SHOPPING_CART',
  //       payload: true
  //     })
  //   } else if (arraySelectedNumbers.length === 0) {
  //     dispatch({
  //       type: 'IS_SHOPPING_CART',
  //       payload: false
  //     })
  //   }
  // }, [arraySelectedNumbers])

  function handleCompleteGame() {
    if (arraySelectedNumbers.length >= selectGame.maxNumber) {
      arraySelectedNumbers.splice(0, arraySelectedNumbers.length)
    }

    do {
      let randomNumber = Math.ceil(Math.random() * selectGame.range)
      if (arraySelectedNumbers.indexOf(randomNumber) === -1) {
        arraySelectedNumbers.push(randomNumber)
        let newArr = arraySelectedNumbers

        setArraySelectedNumbers([...newArr])
      }
    }
    while (arraySelectedNumbers.length < selectGame.maxNumber)
  }

  function handleDeleteBet(indexArray: number) {
    let newArray = listBet
    newArray.splice(indexArray, 1)
    
    setListBet([...newArray])
  }

  function handleTotalPrice() {
    const totalPrice = listBet.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

    return totalPrice
  }

  function handleAddToCart() {
    if (arraySelectedNumbers.length > 0 && arraySelectedNumbers.length === selectGame.maxNumber) {
      const numbersToString = transformNumbers(arraySelectedNumbers)

      let currentBet = {
        numbers: numbersToString,
        game_id: selectGame.id,
        type: selectGame.type,
        color: selectGame.color,
        price: selectGame.price,
        date: getDate(),
        key: `${selectGame.type}-${new Date().getTime()}`
      }
      
      setListBet(prevState => [...prevState, currentBet])
      setArraySelectedNumbers([])
    } else {
      alert(`A ${selectGame.type} deve ter ${selectGame.maxNumber} números selecionados`) 
    }
  }

  function transformNumbers(currentArray: any[]) {
    const numbersToString = [...currentArray].sort(handleCompareNumbers)

    for (let i = 0; i < numbersToString.length; i++) {
      numbersToString[i] = numbersToString[i].toString().padStart(2, '0')
    }

    return numbersToString.join(', ')
  }

  function handleCompareNumbers(a: number, b: number) {
    return a - b;
  }

  async function handleSave() {
    if (handleTotalPrice() >= 3) {
      await api.post('/game/bets', { list: listBet },
      {
        headers: {
          "Authorization": `Bearer ${auth.token}`
        }
      })
      .then((response) => {
        console.log(response)
        // dispatch({
        //   type: 'SAVE_BETS',
        //   payload: listBet
        // })
        dispatch({
          type: 'CART_OFF',
          payload: false
        })
      })
      .catch((error) => {
        alert('Não foi possível criar a aposta.')
        console.log(error)
      })

      navigation.navigate('Home')
    } else {
      alert('Para salvar os jogos o total deve ser de pelo menos R$ 30,00')
    }
  }

  return (
    <>
      <NewBetContent>
        <NewBetText  style={{ marginTop: 16, marginBottom: 16 }}>New bet {selectGame.type}</NewBetText>
        <ChooseGame>Choose a game</ChooseGame>
        <SelectGame selectGame={selectGame} setSelectGame={setSelectGame} />
        {arraySelectedNumbers.length > 0 ? 
          <>
            <NumbersContainer numbersTop={true}>
              {arraySelectedNumbers.sort((a, b) => a - b).map((item, index) =>
                <ButtonNumber
                  value={item} 
                  key={item}
                  selected={arraySelectedNumbers.indexOf(item) !== -1 ? true : false}
                  selectGame={selectGame}
                  arraySelectedNumbers={arraySelectedNumbers}
                  setArraySelectedNumbers={setArraySelectedNumbers}
                  numbersTop={true}
                />
              )}
            </NumbersContainer>
          <ActionButtonsMobileContainer style={{ marginTop: 16, marginBottom: 16 }}>
              <ActionButtonsMobile onPress={() => handleCompleteGame()}>
                <TextActionButton>
              Complete Game
                </TextActionButton>
            </ActionButtonsMobile>
              <ActionButtonsMobile onPress={() => setArraySelectedNumbers([])}>
                <TextActionButton>
              Clear Game
                </TextActionButton>
            </ActionButtonsMobile>
            <CartButton onPress={() => handleAddToCart()}>
              <Ionicons name="cart-outline" size={24} color="#fff" />
              <TextCartButton>
                Add to cart
              </TextCartButton>
            </CartButton>
          </ActionButtonsMobileContainer>
          </>
          :
        <DescriptionGame>
          <TextDescription style={{fontSize: 16, fontWeight: 'bold'}}>Fill your bet</TextDescription>
          <TextDescription style={{fontSize: 14 }}>{selectGame.description}</TextDescription>
        </DescriptionGame>
        }
        <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 320 }}>
          {Array(selectGame.range).fill('').map((item, index) =>
            <ButtonNumber
              value={index + 1} 
              key={index + 1}
              selected={arraySelectedNumbers.indexOf(index + 1) !== -1 ? true : false}
              selectGame={selectGame}
              arraySelectedNumbers={arraySelectedNumbers}
              setArraySelectedNumbers={setArraySelectedNumbers}
              numbersTop={false}
            />
          )}
        </ScrollView>
      </NewBetContent>
      {cart ?
        <Cart 
          // listBet={listBet}
          onHandleDeleteBet={handleDeleteBet}
          onHandleTotalPrice={handleTotalPrice}
          onHandleSave={handleSave}
        />
        :
        null
      }
    </>
  )
}

export default NewBet