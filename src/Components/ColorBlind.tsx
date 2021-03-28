import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';

const option = [
    {
        id: 1,
        title: 'Increase font size',
    
    },
    {
        id: 2,
        title: 'Make fonts bolder'
    },
    {
        id: 3,
        title: 'Black and White'
    },
    {
        id: 4,
        title: 'Animations',

    },
    
]

const MenuItemList = () => {
    return <div className="container">
        {option.map((item) => {
            return (
            <MenuItem key={item.id} {...item}/>
            );
        })};
    </div>
}

const ColorBlind = () => {
  return (
     <MenuItemList/>
  )
};



export default ColorBlind;
