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
            <label htmlFor="option-region">
                <select name='option-region'
                    aria-label='option-region'
                    className='option-region'
                    id='option-region'
                    onChange={handleRegionName}  >
                    <option hidden  >Filter By Region</option>
                    <option hidden  >All Region</option>
                    <option value="Americas">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                </select>
            </label>
        </div>
    )
}