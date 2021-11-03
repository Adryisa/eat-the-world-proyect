import { ActionTypes } from './actionTypes';

export const loadRecipes = (data) => {
  return {
    type: ActionTypes.load,
    payload: data,
  };
};

export const DeleteRecipe = (id) => {
  return {
    type: ActionTypes.delete,
    payload: id,
  };
};
