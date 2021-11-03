import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import { getRecipeByName, getRecipeByCountry } from 'services/apiServices';
import { getFavorites, deleteFavorites } from 'services/userServices';
import { useHistory } from 'react-router-dom';
import { getCountries } from 'services/apiServices';
import { recipeReducer } from 'reducer/reducer';
import { loadRecipes } from 'reducer/actionCreator';
import { DeleteRecipe } from 'reducer/actionCreator';

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

  const displayRecipeListCountry = (input) => {
    getRecipeByCountry(input).then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
  };

  const displayFavorites = () => {
    getFavorites().then((data) => dispatch(loadRecipes(data)));
  };

  const deleteOneRecipe = (id) => {
    deleteFavorites(id);
    dispatch(DeleteRecipe(id));
  };

  const value = {
    list,
    displayRecipeList,
    displayRecipeListCountry,
    displayFavorites,
    countries,
    searchTerm,
    deleteOneRecipe,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
