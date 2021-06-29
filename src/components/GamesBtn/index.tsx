import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import MyCheckbox from './MyCheckbox'



const GamesBtn = () => {
  const [checked, onChange] = React.useState<boolean>(false)
  const { games } = useSelector((state: RootStateOrAny) => state)

  return (
    <>
      {games && games.map((item: {
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
          checked={checked}
          onChange={onChange}
          title={item.type}  
        />
      )}
    </>
  )
}

export default GamesBtn
