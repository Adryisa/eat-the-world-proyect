import generateObjetRecipe from './objectConstructor';

const { REACT_APP_API_KEY } = process.env;

const urlBase = `https://www.themealdb.com/api/json/v2/${REACT_APP_API_KEY}`;

export function getRecipeByName(input) {
  return fetch(`${urlBase}/search.php?s=${input}`)
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
