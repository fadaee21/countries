import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import { Country } from './Country'
import { Loading } from "./../components/Loading";
import { SearchItem } from './SearchItem';

export const AllCountries = () => {

  const { countries, loading, darkModeState } = useGlobalContext()



  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");

  const handleRegionName = (e) => {
    setRegionName(e.target.value);
  };

  const newRegion = regionName
    ? countries.filter((e) => e.region === regionName)
    : countries

  const newName = countryName
    ? newRegion.filter((element) => element.name.common.includes(`${countryName}`))
    : countries


  //country name of server need to be capital for searching the name
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleCountryName = (e) => {
    setCountryName(capitalizeFirstLetter(e.target.value));
  };

  return (
    <div className={`allCountries ${darkModeState ? "darkMode-body" : ""}`}>
      {loading && <Loading />}
      <SearchItem
        handleRegionName={handleRegionName}
        handleCountryName={handleCountryName}
      />
      {newName.map((country, index) => {
        return (
          < Country key={index} {...country} />
        )
      })}
    </div>
  )
}
