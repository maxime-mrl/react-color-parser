import React, { useState } from 'react'
import Color from 'color';
import parseColor from 'parse-color';

function ColorInput({ setTextColor, setSquareColor, setColorName }) {
    const [color, setColor] = useState('');
    function updateColor(input) {
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
    <form className='color-input' onSubmit={e => e.preventDefault()}>
        <input id='color' type='text' role='searchbox' placeholder='Paste a color' value={color} onChange={e => updateColor(e.target.value)}></input>
    </form>
  )
}

export default ColorInput