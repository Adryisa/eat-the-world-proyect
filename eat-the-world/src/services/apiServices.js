import generateObjetRecipe from './objectConstructor';

const { REACT_APP_API_KEY } = process.env;

const urlBase = `https://www.themealdb.com/api/json/v2/${REACT_APP_API_KEY}`;

export function getRecipeByName(input) {
  return fetch(`${urlBase}/search.php?s=${input}`)
    .then((res) => res.json())
    .then((data) => data.meals?.map((item) => generateObjetRecipe(item)));
}
