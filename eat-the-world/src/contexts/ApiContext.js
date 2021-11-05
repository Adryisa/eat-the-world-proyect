import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import { getCountries } from 'services/apiServices';
import { recipeReducer } from 'reducer/reducer';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [list, dispatch] = useReducer(recipeReducer, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const value = {
    list,
    dispatch,
    searchTerm,
    setSearchTerm,
    countries,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
