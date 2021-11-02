import ListRecipe from 'common/ListRecipe/ListRecipe';
import { useApiContext } from 'contexts/ApiContext';

const ListPage = () => {
  const { list } = useApiContext();
  return (
    <section className="list-page">
      <p className="list-page__text">Search results for: Rice</p>
      <ListRecipe list={list} />
    </section>
  );
};

export default ListPage;
