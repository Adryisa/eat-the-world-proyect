import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import { getRecipeByName } from 'services/apiServices';
import { useHistory } from 'react-router-dom';
import { getCountries } from 'services/apiServices';
import { recipeReducer } from 'reducer/reducer';
import { loadRecipes } from 'reducer/actionCreator';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [list, dispatch] = useReducer(recipeReducer, []);
  const [searchTerm, setSearchTerm] = useState('');

  const history = useHistory();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const displayRecipeList = (input) => {
    getRecipeByName(input).then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
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
