import React, { useEffect, useState } from 'react';
import './ColorBlind.css'

const MenuItem = (item: any) => {
    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="container-menu">
            <h6>{item.title}</h6>
            <div className="switch-container">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            
        </div>

    )
}

export default MenuItem;