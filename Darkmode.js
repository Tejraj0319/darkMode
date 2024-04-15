import React, { useEffect, useState } from 'react'

function Darkmode() {
    const getMode =()=>{
        // if mode dosent exist then return false
       return JSON.parse(localStorage.getItem("mode")) || false
    }
    const[dark,setMode]=useState(getMode)

    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(dark))
    },[dark])

    return (
        <div className={dark?"App dark-mode":"App"}>
            <div className='nav'>
                <label className="switch">
                    <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)}/>
                        <span className="slider round"></span>
                </label>
            </div>

            <div className='content'>
                <h1>{dark?"Darkmode is on": "Lightmode is on"}</h1>
                <p>Enable Darkmode</p>
            </div>
        </div>
    )
}

export default Darkmode
