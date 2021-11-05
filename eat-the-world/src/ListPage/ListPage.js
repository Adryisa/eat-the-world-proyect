import ListRecipe from 'common/ListRecipe/ListRecipe';
import { useApiContext } from 'contexts/ApiContext';
import noResultsImg from 'assets/img/crying-orange.png';
import './ListPage.scss';

const ListPage = () => {
  const { list, searchTerm } = useApiContext();
  return (
    <section className="list-page">
      <p className="list-page__text">Search results for: {searchTerm}</p>
      {list ? (
        <ListRecipe list={list} type="api" />
      ) : (
        <div className="list-page__no-results">
          <img
            className="list-page__no-results-img"
            src={noResultsImg}
            alt="Orange emoji no results found"
          />
          <p className="list-page__no-results-text">
            Oops! We didn't find any results matching this search...
          </p>
        </div>
      )}
    </section>
  );
};

export default ListPage;
