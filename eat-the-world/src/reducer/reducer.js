import { ActionTypes } from './actionTypes';

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.load:
      return action.payload ? [...action.payload] : null;
    case ActionTypes.delete:
      return state.filter((item) => item.id !== action.payload);
    case ActionTypes.add:
      return [...state, action.payload];
    default:
      throw new Error();
  }
};
