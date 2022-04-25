import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const endPointAllCountry = "https://restcountries.com/v3.1/all";

//LocalStorage for dark and light mode --------------------
const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error({ e });
  }
};
const getLocalStorage = (key, initialValue) => {
  try {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};
//----------------------------------------------------------

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [regionName, setRegionName] = useState("");
  const [darkModeState, setDarkModeState] = useState(() =>
    getLocalStorage("mode", "false")
  );

  useEffect(() => {
    setLocalStorage("mode", darkModeState);
  }, [darkModeState]);

  // change the region name
  const handleRegionName = (e) => {
    setRegionName(e.target.value);
  };

  // change the theme mode
  const darkModeStateChanger = () => {
    setDarkModeState(!darkModeState);
  };

  // fetch data from server
  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(endPointAllCountry, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCountries(data);
      } else {
        //it must re direct to not found page
        console.log(response.statusText);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      console.log("something strange happen in fetching all countries data, plz try again");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <AppContext.Provider
      value={{
        countries,
        loading,
        darkModeStateChanger,
        darkModeState,
        setCountries,
        regionName,
        handleRegionName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook for global State

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
