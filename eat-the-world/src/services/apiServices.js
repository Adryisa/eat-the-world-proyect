import generateObjetRecipe from './objectConstructor';

const urlBase = 'https://www.themealdb.com/api/json/v1/1';

export function getRecipeByName(input) {
  return fetch(`${urlBase}/search.php?s=${input}`)
    .then((res) => res.json())
    .then((data) => data.meals.map((item) => generateObjetRecipe(item)));
}
