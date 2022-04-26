import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
export const Country = ({ flags, name, population, region, capital,cca3 }) => {


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { darkModeState } = useGlobalContext()

  return (
    <div className={`country ${darkModeState ? "darkMode" : ""}`}>
      <Link to={`country/${cca3}`} ><img src={flags.png} alt={`flag of ${name.common}`} /></Link>
      <h3>{name.common}</h3>
      <ul className="country-info">
        <li><span>population:</span> {numberWithCommas(population)}</li>
        <li><span>region:</span> {region}</li>
        <li><span>capital:</span> {capital}</li>
      </ul>
    </div>
  )
}
