import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { Loading } from '../components/Loading'

export const CountryDetail = () => {
  const [loading, setLoading] = useState(false)
  const [countryDetail, setCountryDetail] = useState([])
  const { darkModeState } = useGlobalContext()
  const { id } = useParams()
  const navigate = useNavigate()


  const fetchDetails = async () => {

    try {
      setLoading(true)
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setCountryDetail(data);
      } else {
        //it must re direct to not found page
        console.log(res.statusText);
      }
      setLoading(false)

    } catch (error) {
      console.error(error);
      console.log("something strange happen in fetching detail data, plz try again");
    }
  }

  React.useEffect(() => {
    fetchDetails()
    // eslint-disable-next-line 
  }, [])

  if (loading) {
    return <Loading />
  }



  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (

    <div>
      {countryDetail.map((item, index) => {
        const {
          population,
          flags,
          borders,
          name,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages
        } = item;

        console.log(name)


        //native name has different key name so i should find last item of object
        const nativeName = name.nativeName;
        const nativeNameArray = Object.values(nativeName)
        const lastItemOfObjectNativeName = (nativeNameArray[nativeNameArray.length - 1].common)

        return <div key={index} className={`detail ${darkModeState ? "darkMode-body" : ""}`}  >
          <div className="detail-button-content">
            <button onClick={() => navigate("/")}
              className={`btn-back ${darkModeState ? "btn-back-dark" : "btn-back-light"}`} >
              <i className="fa-solid fa-arrow-left-long"></i>
              Back
            </button>
            <div className="detail-content">
              <img src={flags.png} alt={`the flag of ${name.common}`} />
              <div className="detail-explanation">
                <h2 className="detail-name">{name.common}</h2>
                <div className="detail-body">
                  <ul className="detail-part1">
                    <li>
                      native name: <span>{lastItemOfObjectNativeName}</span>
                    </li>
                    <li>
                      population: <span>{numberWithCommas(population)}</span>
                    </li>
                    <li>
                      region: <span>{region}</span>
                    </li>
                    <li>
                      sub region: <span>{subregion}</span>
                    </li>
                    <li>
                      capital: <span>{capital}</span>
                    </li>
                  </ul>
                  <ul className="detail-part2">
                    <li>
                      top level domain: <span>{tld[0]}</span>
                    </li>
                    <li>
                      currency: {Object.values(currencies)?.map((item, i) => {
                        const { name: currencyName, symbol: currencySymbol } = item
                        return <span key={i}>{currencyName}  "{currencySymbol}" </span>
                      })}
                    </li>
                    <li>
                      Languages: {Object.values(languages)?.map((item, i) => {
                        return <span key={i}>
                          {/* The last item should not be with comma */}
                          {i !== Object.values(languages).length - 1 ? item + ", " : item}
                        </span>
                      })}
                    </li>
                  </ul>
                </div>
                <div className="border-countries">
                  <p>border countries: </p>
                  <div className='border-country' >
                    {borders?.map((borderCountries, i) => {
                      return <span key={i}>{borderCountries} </span>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
