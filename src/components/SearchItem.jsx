import React from 'react'



export const SearchItem = ({ handleRegionName, handleCountryName }) => {


    return (
        <div className='form-control-countries' >
            <div className='input-searchIcon'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    className='input-country'
                    placeholder=' Search for a country  '
                    onChange={handleCountryName}
                />
            </div>
            <select name='region' className='option-region' onChange={handleRegionName}  >
                <option hidden  >Filter by region</option>
                <option value="Americas">America</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
            </select>
        </div>
    )
}