import generateObjetRecipe from './objectConstructor';

export default function getRecipe() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken';
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.meals.map((item) => generateObjetRecipe(item)));
}
