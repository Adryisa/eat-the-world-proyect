import generateObjetRecipe from './objectConstructor';

const urlBase = 'https://www.themealdb.com/api/json/v1/1';

export default function getRecipeByName() {
  return fetch(`${urlBase}/search.php?s=Chicken`)
    .then((res) => res.json())
    .then((data) => data.meals.map((item) => generateObjetRecipe(item)));
}

export function getCountries() {
  return fetch(`${urlBase}/list.php?a=list`)
    .then((res) => res.json())
    .then((data) => {
      const promise = data.meals.map((item) => {
        return fetch(`${urlBase}/filter.php?a=${item.strArea}`)
          .then((res) => res.json())
          .then((data) => {
            return {
              country: item.strArea,
              image: data.meals[0]?.strMealThumb,
            };
          });
      });
      return Promise.all(promise);
    });
}
