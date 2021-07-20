import React from 'react'

import { Pressable, Text } from './styles'
interface IMyCheckbox {
  title: string
  color: string
  betFilter: Array<string>
  setBetFilter: React.Dispatch<React.SetStateAction<Array<string>>>
}

const MyCheckbox = ({ title, color, betFilter, setBetFilter }: IMyCheckbox) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (checked) {
      let newArraySelected = betFilter
      newArraySelected.push(title)
      setBetFilter([...newArraySelected])
    } else {
      let newArraySelected = betFilter
      let indexRemove = newArraySelected.indexOf(title)
      newArraySelected.splice(indexRemove, 1)

      setBetFilter([...newArraySelected])
    }
  }, [checked])


  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      style={{ 
        backgroundColor: checked ? color : '#fff',
        borderWidth: 2,
        borderColor: color
      }} 
    >
      <Text style={{ color: checked ? '#fff' : color}}>
        {title}
      </Text>
      <Text style={{
        color: '#fff', 
        fontSize: 12,
        position: 'absolute', 
        right: 8, 
        top: 0
      }}>
        {checked && "x"}
      </Text>
    </Pressable>
  );
}

export default MyCheckbox
