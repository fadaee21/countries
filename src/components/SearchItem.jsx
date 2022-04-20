import React from 'react'



export const SearchItem = ({ handleRegionName, handleCountryName }) => {


    return (
        <form>
            <input
                className='input-country'
                onChange={handleCountryName}
            />
            <select onChange={handleRegionName}  >
                <option defaultValue="" hidden >Select your option</option>
                <option value="Americas">America</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
            </select>
        </form>

    )
}
