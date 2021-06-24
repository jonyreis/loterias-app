import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import styled from 'styled-components/native';


const TextInput = styled.TextInput`
  color: #9D9D9D;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  
  height: 70px;
  padding: 8px;
`

interface IInputProps {
  name: string
  label?: string
  autoCorrect?: boolean
  autoCapitalize?: string
  keyboardType?: string
  secureTextEntry?: boolean
}


const Input = ({ name, label, secureTextEntry, ...rest }: IInputProps) => {
  const [value, onChangeText] = React.useState('')

  return (
    <TextInput 
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={label}     
      style={{borderBottomColor: '#ddd', borderBottomWidth: 2}}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default Input