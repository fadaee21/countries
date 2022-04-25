import React from 'react'
import { useGlobalContext } from '../context/context'

export const Loading = () => {
  const { darkModeState } = useGlobalContext()
  return (
    <div className={`loading ${darkModeState ? 'darkMode' : ""} `}  >
      <div className="loader"></div>
    </div>
  )
}
