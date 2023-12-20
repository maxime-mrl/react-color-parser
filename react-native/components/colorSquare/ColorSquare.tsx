// import React from 'react'
import { View, Text } from 'react-native';
import styles from './ColorSquare.style';

const ColorSquare = ({ color, textColor, colorName }: {color: string, textColor:string, colorName:string}): React.JSX.Element => {
  return (
    <View style={styles({theme: "dark", color}).colorSquare}>
      <Text style={styles({theme: "dark", textColor}).text}>{(color.length > 1 ? color : "#FFFFFF")}</Text>
      <Text style={styles({theme: "dark", textColor}).text}>{colorName}</Text>
    </View>
  )
}

export default ColorSquare;