import ListRecipe from 'common/ListRecipe/ListRecipe';

const FavoritesPage = () => {
  return (
    <section className="fav-page">
      <h2 className="fav-page__title">Your favorites</h2>
      <ListRecipe />
    </section>
  );
};

export default FavoritesPage;
