import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

export const Error = () => {

    const { darkModeState } = useGlobalContext()

    const navigate = useNavigate()

    return (
        <div className={`error ${darkModeState ? "darkMode" : ""}`}>
            <div className="img404"></div>
            <h2>404_</h2>
            <h4>YOU'RE BEYOND THE BORDERS</h4>
            <button className='btn btn-light btn-error' onClick={()=>navigate("/")} >back to home</button>
        </div>
    )
}
