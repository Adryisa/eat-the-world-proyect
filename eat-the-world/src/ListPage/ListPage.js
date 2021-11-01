import ListRecipe from 'common/ListRecipe';

const ListPage = () => {
  return (
    <section className="list-page">
      <p className="list-page__text">Search results for: Rice</p>
      <ListRecipe />
    </section>
  );
};

export default ListPage;
