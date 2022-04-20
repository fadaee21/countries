import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const endPointAllCountry = "https://restcountries.com/v3.1/all";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [darkModeState, setDarkModeState] = useState(false);
  
  const darkModeStateChanger = () => {
    setDarkModeState(!darkModeState);
  };
  
  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(endPointAllCountry);
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
      console.log("khata chap shavad");
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
        setCountries
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
