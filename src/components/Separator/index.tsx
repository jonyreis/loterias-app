import React from 'react'
import Svg, { Rect } from 'react-native-svg'

interface ISeparatorProps {
  color: string
}


const Separator = ({ color }: ISeparatorProps) => {
  return (
    <Svg width="6" height="79" viewBox="0 0 6 79" fill="none">
      <Rect width="6" height="79" rx="3" fill={color}/>
    </Svg>
  )
}

export default Separator