import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './PickColor.css';

function PickColor() {
  const [colorHexCode, setColorHexCode] = useState('#000000');

  return (
    <div className="PickColor">
      
      <SketchPicker
        color={colorHexCode}
        onChange={e => setColorHexCode(e.hex)} 
      />

      
     

    </div>
  );
}

export default PickColor;