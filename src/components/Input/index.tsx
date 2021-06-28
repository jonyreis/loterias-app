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


const Input = ({ name, label, secureTextEntry }: IInputProps) => {
  const [value, onChangeText] = React.useState('')

  const inputRef = useRef(null)
  
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  
  return (
    <TextInput 
      ref={inputRef}
      defaultValue={defaultValue}

      placeholder={label}     
      style={{borderBottomColor: '#ddd', borderBottomWidth: 2}}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}

export default Input