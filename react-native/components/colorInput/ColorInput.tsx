import { useState } from 'react';
import { View, TextInput } from 'react-native';
import Color from 'color';
import parseColor from 'parse-color';
import styles from './ColorInput.style';


const ColorInput = ({ setTextColor, setSquareColor, setColorName }: {setTextColor: (color: string) => void, setSquareColor: (color: string) => void,  setColorName: (name: string) => void,}): React.JSX.Element => {
  const [color, setColor] = useState('');
  function updateColor(input: string): void {
    input = input.toLowerCase();
    setColor(input);
    if (/^#/.test(input) && (input.length !== 7 && input.length !== 4)) return;
    if (parseColor(input).hex) {
      const parsedColor = Color(parseColor(input).hex);
      if (parsedColor.isLight()) setTextColor("#000000");
      else setTextColor("#ffffff");
      setSquareColor(parsedColor.hex());
      setColorName(parseColor(input).keyword);
    }
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='A color' value={color} onChangeText={updateColor}/>
    </View>
  )
}

export default ColorInput;