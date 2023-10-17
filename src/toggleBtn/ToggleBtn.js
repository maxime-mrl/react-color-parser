import React from 'react'

function ToggleBtn({textColor, setTextColor}) {
    function toggleColor() {
        if (textColor === "#000000") setTextColor('#ffffff');
        else setTextColor('#000000')
    }
  return (
    <button className='toggle-btn' onClick={toggleColor}>Toggle color</button>
  )
}

export default ToggleBtn