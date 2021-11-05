import { useHistory } from 'react-router-dom';
import { useApiContext } from 'contexts/ApiContext';
import { getFavorites } from 'services/userServices';
import * as apiServices from 'services/apiServices';
import { loadRecipes } from 'reducer/actionCreator';
import { useAuth0 } from '@auth0/auth0-react';

const useApiState = () => {
  const { user } = useAuth0();
  const { list, dispatch, searchTerm, setSearchTerm, countries } =
    useApiContext();
  const history = useHistory();

  const compareDataWithFavorites = (apiData) => {
    return getFavorites().then((favoritesData) => {
      const apiArray = apiData?.map((apiEl) => {
        const found = favoritesData.find(
          (el) => el.recipeId === apiEl.recipeId && el.userEmail === user?.email
        );
        return { ...apiEl, isFavorite: found ? true : false };
      });
      return apiArray ? Promise.all(apiArray) : null;
    });
  };
  const displayRecipeList = (input) => {
    apiServices
      .getRecipeByName(input)
      .then((apiData) => compareDataWithFavorites(apiData))
      .then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
  };
  const displayRecipeListCountry = (input) => {
    apiServices
      .getRecipeByCountry(input)
      .then((apiData) => compareDataWithFavorites(apiData))
      .then((data) => dispatch(loadRecipes(data)));
    setSearchTerm(input);
    history.push('/recipes');
  };
  const displayRecipeDetails = (recipeId) => {
    return apiServices.getRecipeById(recipeId).then((apiData) =>
      getFavorites().then((favoritesData) => {
        const found = favoritesData.find(
          (el) => el.recipeId === apiData.recipeId
        );
        return { ...apiData, isFavorite: found ? true : false };
      })
    );
  };
  return {
    list,
    searchTerm,
    setSearchTerm,
    countries,
    displayRecipeList,
    displayRecipeListCountry,
    displayRecipeDetails,
  };
};

export default useApiState;
