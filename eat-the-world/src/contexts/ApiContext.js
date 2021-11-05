import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react';

import {
  getRecipeByName,
  getRecipeByCountry,
  getRecipeById,
} from 'services/apiServices';
import { getFavorites } from 'services/userServices';
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
    getRecipeByName(input)
      .then((apiData) => compareDataWithFavorites(apiData))
      .then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
  };

  const compareDataWithFavorites = (apiData) => {
    return getFavorites().then((favoritesData) => {
      const apiArray = apiData?.map((apiEl) => {
        const found = favoritesData.find(
          (el) => el.recipeId === apiEl.recipeId
        );
        return { ...apiEl, isFavorite: found ? true : false };
      });
      return apiArray ? Promise.all(apiArray) : null;
    });
  };

  const displayRecipeDetails = (recipeId) => {
    return getRecipeById(recipeId).then((apiData) =>
      getFavorites().then((favoritesData) => {
        const found = favoritesData.find(
          (el) => el.recipeId === apiData.recipeId
        );
        return { ...apiData, isFavorite: found ? true : false };
      })
    );
  };

  const displayRecipeListCountry = (input) => {
    getRecipeByCountry(input)
      .then((apiData) => compareDataWithFavorites(apiData))
      .then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
  };

  const value = {
    list,
    dispatch,
    displayRecipeList,
    displayRecipeListCountry,
    displayRecipeDetails,
    countries,
    searchTerm,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
