import { useState } from "react";
import ColorSquare from "./colorSquare/ColorSquare";
import ColorInput from "./colorInput/ColorInput";
import ToggleBtn from "./toggleBtn/ToggleBtn";

function App() {
  const [squareColor, setSquareColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  return (
    <div className="App">
      <ColorSquare color={squareColor} textColor={textColor} colorName={colorName} />
      <ColorInput setSquareColor={setSquareColor} setTextColor={setTextColor} setColorName={setColorName} />
      <ToggleBtn textColor={textColor} setTextColor={setTextColor} />
    </div>
  );
}

export default App;
