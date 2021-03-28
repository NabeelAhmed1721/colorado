import React, {useState} from 'react';
import './PickColor.css';


  
  const HtmlEntitySingle = (item: any) => {
    return (
      
    
    <div className="single">
      {console.log(item)}
      <p>{item.props.element}</p>
      <div className="circle" style={{backgroundColor :  item.props.color}}></div>
    </div>  
            
    )
  }


  export default HtmlEntitySingle;