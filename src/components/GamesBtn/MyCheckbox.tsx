import React from 'react'

import { Pressable, Text } from './styles'
interface IMyCheckbox {
  title: string
  color: string
  selectedFilter: Array<string>
  setSelectedFilter: React.Dispatch<React.SetStateAction<Array<string>>>
}

const MyCheckbox = ({ title, color, selectedFilter, setSelectedFilter }: IMyCheckbox) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (checked) {
      let newArraySelected = selectedFilter
      newArraySelected.push(title)
      setSelectedFilter([...newArraySelected])
    } else {
      let newArraySelected = selectedFilter
      let indexRemove = newArraySelected.indexOf(title)
      newArraySelected.splice(indexRemove, 1)

      setSelectedFilter([...newArraySelected])
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
