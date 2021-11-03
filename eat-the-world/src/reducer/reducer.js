import { ActionTypes } from './actionTypes';

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.load:
      return [...action.payload];
    default:
      throw new Error();
  }
};
