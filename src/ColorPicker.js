import React, { useState, useEffect } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <label htmlFor="pickColor">Color Picker</label>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              height: '50px',
              width: '50px',
              margin: '10px'
            }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <button style={{ backgroundColor: selectedColor, marginTop: '20px' }} onClick={() => selectColor(selectedColor)}>
        {selectedColor || 'Pick a color'}
      </button>
    </div>
  );
};

export default ColorPicker;