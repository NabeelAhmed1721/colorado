import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './PickColor.css';
import HtmlEntitySingle from './HtmlEntitySingle';

const htmlEntityList = [
  {
    element :'Heading',
    color : '#000',
  },
  {
    element :'Sub-Heading',
    color : '#000',
  },
  {
    element :'Paragraph',
    color : '#000',
  },
  {
    element :'Background color',
    color : '#000',
  },
  
];

const HtmlEntity = () => {
  
  return <div className="html-elements">
    {htmlEntityList.map((item) => {
      // return  <h1>rendered in pc</h1>;
       return (
          <HtmlEntitySingle key={item.element} props={item} />
       );
    })};
  </div>
}
  




const  PickColor= () => {
  const [colorHexCode, setColorHexCode] = useState('#000000');

  return (
    <div className="container">
      <div className="pickColor">
      
      <SketchPicker
        color={colorHexCode}
        onChange={e => setColorHexCode(e.hex)} 
      />

    </div>
    <hr/>
    
    <HtmlEntity />  

    </div>
    
  );
}

export default PickColor;