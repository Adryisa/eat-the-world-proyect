import { useContext, createContext, useState, useEffect } from 'react';
import { getRecipeByName } from 'services/apiServices';
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

<<<<<<< HEAD
  const handleSubmit = (e, input) => {
    e.preventDefault();
    getRecipeByName(input).then((data) => {
      setList(data);
    });
=======
  const displayRecipeList = (input) => {
    getRecipeByName(input).then((data) => setList(data));
    setSearchTerm(input);
>>>>>>> main
    history.push('/recipes');
  };

  const value = {
    list,
    displayRecipeList,
    countries,
    searchTerm,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
