import { useEffect } from 'react';
import ListRecipe from 'common/ListRecipe/ListRecipe';
import { useApiContext } from 'contexts/ApiContext';
import './Favorites.scss';

const FavoritesPage = () => {
  const { list, displayFavorites } = useApiContext();

  useEffect(() => {
    displayFavorites();
  }, []);

  return (
    <section className="fav-page">
      <h2 className="fav-page__title">Your favorites</h2>
      {list.length > 0 && <ListRecipe list={list} />}
    </section>
  );
};

export default FavoritesPage;
