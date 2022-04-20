import React from 'react'
import { useGlobalContext } from '../context/context'

export const Navbar = () => {
    const { darkModeState, darkModeStateChanger } = useGlobalContext()
    return (
        <div className={`navbar ${darkModeState ? "darkMode" : ""}`}>
            <p >Where in the world?</p>
            <button
                onClick={darkModeStateChanger}
                className='btn btn-light' >
                <i className="fa-regular fa-moon fa-lg"></i>
                Dark Mode
            </button>
        </div>
    )
}
