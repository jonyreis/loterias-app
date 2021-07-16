import React from 'react'
import styled from 'styled-components/native'

const Pressable = styled.Pressable`
  border-radius: 100px;
  
  height: 30px;
  padding: 8px 20px;
`

const Text = styled.Text`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;

  margin: auto;
`

interface IMyCheckbox {
  title: string
  color: string
  selectedFilter: Array<string>
  setSelectedFilter: React.Dispatch<React.SetStateAction<Array<string>>>
}

const MyCheckbox = ({ title, color, selectedFilter, setSelectedFilter }: IMyCheckbox) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  if (checked) {
    let aaa = title
    setSelectedFilter(prevState => [...prevState, aaa])
  } else {
      let newArraySelected = selectedFilter
      let indexRemove = newArraySelected.indexOf(title)
      newArraySelected.splice(indexRemove, 1)

      setSelectedFilter([...newArraySelected])
  }


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
