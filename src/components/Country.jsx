import React from 'react'
import { useGlobalContext } from '../context/context';
export const Country = ({ flags, name, population, region, capital }) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { darkModeState } = useGlobalContext()

  return (
    <div className={`country ${darkModeState ? "darkMode" : ""}`}>
      <img src={flags.png} alt={`flag of ${name.common}`} />
      <h3>{name.common}</h3>
      <div className="country-info">
        <p><span>population:</span> {numberWithCommas(population)}</p>
        <p><span>region:</span> {region}</p>
        <p><span>capital:</span> {capital}</p>
      </div>
    </div>
  )
}
