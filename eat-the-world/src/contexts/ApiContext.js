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
import {
  getFavorites,
  deleteFavorites,
  addFavorites,
} from 'services/userServices';
import { useHistory } from 'react-router-dom';
import { getCountries } from 'services/apiServices';
import { recipeReducer } from 'reducer/reducer';
import { loadRecipes, addRecipe, deleteRecipe } from 'reducer/actionCreator';

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

  const displayRecipeListFavorites = (input) => {
    getRecipeByName(input)
      .then((apiData) =>
        getFavorites().then((favoritesData) => {
          const apiArray = apiData?.map((apiEl) => {
            const found = favoritesData.find(
              (el) => el.recipeId === apiEl.recipeId
            );
            return { ...apiEl, isFavorite: found ? true : false };
          });
          return apiArray ? Promise.all(apiArray) : null;
        })
      )
      .then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
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
    getRecipeByCountry(input).then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
  };

  const displayFavorites = () => {
    getFavorites().then((data) => dispatch(loadRecipes(data)));
  };

  const deleteOneRecipe = (item) => {
    getFavorites().then((data) =>
      data.forEach((el) => {
        if (el.recipeId === item.recipeId) {
          deleteFavorites(el.id);
          dispatch(deleteRecipe(el.id));
        }
      })
    );
  };

  const deleteOneRecipeNoDispatch = (item) => {
    getFavorites().then((data) =>
      data.forEach((el) => {
        if (el.recipeId === item.recipeId) deleteFavorites(el.id);
      })
    );
  };

  const addOneRecipe = (input) => {
    addFavorites(input).then((data) => dispatch(addRecipe(data)));
  };

  const value = {
    list,
    displayRecipeList,
    displayRecipeListFavorites,
    displayRecipeListCountry,
    displayFavorites,
    deleteOneRecipeNoDispatch,
    addOneRecipe,
    displayRecipeDetails,
    countries,
    searchTerm,
    deleteOneRecipe,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
