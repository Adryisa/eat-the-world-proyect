import { useAuth0 } from '@auth0/auth0-react';
import * as userServices from 'services/userServices';
import * as actions from 'reducer/actionCreator';
import { useApiContext } from 'contexts/ApiContext';

const useUserState = () => {
  const { user } = useAuth0();
  const { list, dispatch } = useApiContext();

  const displayFavorites = () => {
    userServices
      .getFavorites()
      .then((data) =>
        dispatch(
          actions.loadRecipes(data.filter((el) => el.userEmail === user?.email))
        )
      );
  };
  const deleteOneRecipe = (item) => {
    userServices.getFavorites().then((data) =>
      data.forEach((el) => {
        if (el.recipeId === item.recipeId) {
          userServices.deleteFavorites(el.id);
          dispatch(actions.deleteRecipe(el.id));
        }
      })
    );
  };
  const deleteOneRecipeNoDispatch = (item) => {
    userServices.getFavorites().then((data) =>
      data.forEach((el) => {
        if (el.recipeId === item.recipeId) userServices.deleteFavorites(el.id);
      })
    );
  };
  const addOneRecipe = (input) => {
    userServices
      .addFavorites(input)
      .then((data) => dispatch(actions.addRecipe(data)));
  };
  const addOneRecipeNoDispatch = (item) => {
    userServices.addFavorites({
      ...item,
      isFavorite: true,
      userEmail: user.email,
    });
  };
  return {
    list,
    displayFavorites,
    deleteOneRecipe,
    deleteOneRecipeNoDispatch,
    addOneRecipe,
    addOneRecipeNoDispatch,
  };
};

export default useUserState;
