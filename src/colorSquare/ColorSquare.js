import React from 'react'

function ColorSquare({color, textColor, colorName}) {
  return (
    <div className='color-sqr' style={{backgroundColor: color, color: textColor, borderColor: textColor}}>
        <p>{(color ? color : "#FFFFFF")}</p>
        <p>{(colorName ? colorName : "")}</p>
    </div>
  )
}

export default ColorSquare