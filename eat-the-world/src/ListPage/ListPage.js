import ListRecipe from 'common/ListRecipe/ListRecipe';
import { useApiContext } from 'contexts/ApiContext';
import './ListPage.scss';
const ListPage = () => {
  const { list, searchTerm } = useApiContext();
  return (
    <section className="list-page">
      <p className="list-page__text">Search results for: {searchTerm}</p>
      <ListRecipe list={list} />
    </section>
  );
};

export default ListPage;
