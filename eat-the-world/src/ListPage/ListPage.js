import ListRecipe from 'common/ListRecipe/ListRecipe';
import { useApiContext } from 'contexts/ApiContext';
import noResultsImg from 'assets/img/crying-orange.png';

const ListPage = () => {
  const { list } = useApiContext();
  console.log(list);
  return (
    <section className="list-page">
      <p className="list-page__text">Search results for: Rice</p>
      {list ? (
        <ListRecipe list={list} />
      ) : (
        <img src={noResultsImg} alt="Orange emoji no results found" />
      )}
    </section>
  );
};

export default ListPage;
