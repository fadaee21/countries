import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import { Country } from './Country'
import { Loading } from './Loading';

import { SearchItem } from './SearchItem';

export const AllCountries = () => {



  const { countries, darkModeState, regionName, handleRegionName, loading } = useGlobalContext()
  const [countryName, setCountryName] = useState("");

  if (loading) {
    return <Loading />
  }


  const newRegion = regionName
    ? countries.filter((e) => e.region === regionName)
    : countries

  const newName = countryName
    ? newRegion.filter((element) => element.name.common.includes(`${countryName}`))
    : newRegion


  //country name in server need to be capital for searching the name
  function capitalizeFirstLetter(nameOfCountry) {
    return nameOfCountry.charAt(0).toUpperCase() + nameOfCountry.slice(1);
  }
  const handleCountryName = (e) => {
    setCountryName(capitalizeFirstLetter(e.target.value));
  };

  return (
    <div className={`allCountries ${darkModeState ? "darkMode-body" : ""}`}>


      <SearchItem
        regionName={regionName}
        handleRegionName={handleRegionName}
        handleCountryName={handleCountryName}
      />
      <div className="country-collection">
        {newName.map((country, index) => {
          return (
            < Country key={index} {...country} />
          )
        })}
      </div>
    </div>
  )
}
