import { useContext, createContext, useState, useEffect } from 'react';
import { getRecipeByName, getRecipeByCountry } from 'services/apiServices';
import { useHistory } from 'react-router-dom';
import { getCountries } from 'services/apiServices';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const history = useHistory();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const displayRecipeList = (input) => {
    getRecipeByName(input).then((data) => setList(data));
    setSearchTerm(input);
    history.push('/recipes');
  };

  const displayRecipeListCountry = (input) => {
    getRecipeByCountry(input).then((data) => setList(data));
    setSearchTerm(input);
    history.push('/recipes');
  };

  const value = {
    list,
    displayRecipeList,
    displayRecipeListCountry,
    countries,
    searchTerm,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
