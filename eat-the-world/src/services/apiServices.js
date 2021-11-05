import generateObjetRecipe from './objectConstructor';

const urlBase = `www.themealdb.com/api/json/v1/1`;

export function getRecipeByName(input) {
  return fetch(`${urlBase}/search.php?s=${input}`)
    .then((res) => res.json())
    .then((data) => data.meals?.map((item) => generateObjetRecipe(item)));
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
              country:
                item.strArea === 'Unknown' ? 'Other countries' : item.strArea,
              image: data.meals[0]?.strMealThumb,
            };
          });
      });
      return Promise.all(promise);
    });
}

export function getRecipeByCountry(country) {
  const cleanCountry = country === 'Other countries' ? 'Unknown' : country;
  return fetch(`${urlBase}/filter.php?a=${cleanCountry}`)
    .then((res) => res.json())
    .then((data) => {
      const promise = data.meals.map((item) => {
        return fetch(`${urlBase}/lookup.php?i=${item.idMeal}`)
          .then((res) => res.json())
          .then((data) => generateObjetRecipe(data.meals[0]));
      });
      return Promise.all(promise);
    });
}

export function getRecipeById(id) {
  return fetch(`${urlBase}/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => generateObjetRecipe(data.meals[0]));
}
