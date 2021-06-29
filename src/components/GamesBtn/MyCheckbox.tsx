import React from 'react'

import styled from 'styled-components/native'

const Pressable = styled.Pressable`
  border-radius: 100px;
  padding: 8px 20px;
  border-color: #444;
`

const Text = styled.Text`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
`

const MyCheckbox = ({ checked, onChange, title }: any) => {
  function onCheckmarkPress() {
    onChange(!checked)
  }

  return (
    <Pressable
      onPress={onCheckmarkPress}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}

export default MyCheckbox