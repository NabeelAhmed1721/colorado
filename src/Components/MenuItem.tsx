import React, { useEffect, useState } from 'react';
import './ColorBlind.css'



const MenuItem = (item: any) => {
    const [toggle, setToggle] = useState(false);

   const title = item.title;
    // useEffect(() => {
    //     console.log(toggle, item.title)
    // }, [toggle])


    useEffect(() => {
        chrome.storage.local.set(
          {title : toggle}
    )}, [toggle]);
    

    const triggerToggle = (e: any) => {
        
        setToggle(!toggle)
        
    }
    return (
        <div className="container-menu">
            <h6 >{item.title}</h6>
            <div className="switch-container" >
                <label className="switch" >
                    <input type="checkbox" onClick= {(e) => triggerToggle(e)}/>
                    <span className="slider round"></span>
                </label>
            </div>
            
        </div>

    )

   
}



export default MenuItem;