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
}


const Input = ({ name, label, ...rest }: IInputProps) => {
  const [value, onChangeText] = React.useState('')

  const inputRef: React.Ref<any> = useRef(null)
  
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    inputRef.current.value = defaultValue
  }, [defaultValue])
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue
  }, [defaultValue])
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value
        return ''
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value })
          inputRef.current.value = value
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' })
          inputRef.current.value = ''
        }
      },
    });
  }, [fieldName, registerField])

  const handleChangeText = React.useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text
      if (onChangeText) onChangeText(text)
    },
    [onChangeText],
  )

  return (
    <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={handleChangeText}
      placeholder={label}     
      {...rest}

      style={{borderBottomColor: '#ddd', borderBottomWidth: 2}}
      secureTextEntry={name === "password" ? true : false}
      />
  );
}

export default Input