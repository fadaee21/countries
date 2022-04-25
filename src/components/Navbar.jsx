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

                {darkModeState
                    ? <p><i className="fa-regular fa-sun"></i>Light Mode </p>
                    : <p><i className="fa-regular fa-moon fa-lg"></i>Dark Mode </p>
                }
            </button>
        </div>
    )
}
