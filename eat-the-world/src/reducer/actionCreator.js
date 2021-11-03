import { ActionTypes } from './actionTypes';

export const loadRecipes = (data) => {
  return {
    type: ActionTypes.load,
    payload: data,
  };
};
