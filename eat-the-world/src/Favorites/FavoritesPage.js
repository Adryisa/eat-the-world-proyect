import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ListRecipe from 'common/ListRecipe/ListRecipe';
import useUserState from 'hooks/useUserState';
import './Favorites.scss';

const FavoritesPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { list, displayFavorites } = useUserState();

  useEffect(() => {
    displayFavorites();
  }, []);

  return (
    <section className="fav-page">
      {isAuthenticated ? (
        list.length > 0 ? (
          <>
            <h2 className="fav-page__title">Your favorites</h2>
            <ListRecipe list={list} type="user" />
          </>
        ) : (
          <div className="fav-page__wrapper">
            <p className="text">You have not saved any favorites.</p>
          </div>
        )
      ) : (
        <div className="fav-page__wrapper">
          <p className="fav-page__text">
            You are not logged in. Please log in to see your favorites.
          </p>
          <button className="fav-page__btn" onClick={() => loginWithRedirect()}>
            Log in
          </button>
        </div>
      )}
    </section>
  );
};

export default FavoritesPage;
