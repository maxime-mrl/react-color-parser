// import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ToggleBtn.style';

const ToggleBtn = ({ setTextColor, textColor }: {setTextColor: (color: string) => void, textColor: string }): React.JSX.Element => {
  function toggleColor(): void {
    if (textColor === "#000000") setTextColor('#ffffff');
    else setTextColor('#000000')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleColor}>
        <Text style={styles.button}>Toggle color</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToggleBtn;