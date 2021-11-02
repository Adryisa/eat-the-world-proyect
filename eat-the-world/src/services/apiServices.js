import generateObjetRecipe from './objectConstructor';

const urlBase = 'https://www.themealdb.com/api/json/v1/1';

export default function getRecipeByName() {
  return fetch(`${urlBase}/search.php?s=Chicken`)
    .then((res) => res.json())
    .then((data) => data.meals.map((item) => generateObjetRecipe(item)));
}
