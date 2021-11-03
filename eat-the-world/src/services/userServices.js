const urlBase = 'http://localhost:3004/favorites';

export function getFavorites() {
  return fetch(urlBase).then((res) => res.json());
}

export function deleteFavorites(id) {
  fetch(`${urlBase}/${id}`);
}
