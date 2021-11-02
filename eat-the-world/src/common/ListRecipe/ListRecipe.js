import Items from './Items';
import './ListRecipe.scss';

const ListRecipe = () => {
  const info = ['title', 'cooking', 'tags'];
  return (
    <nav className="recipes-nav">
      <ul className="recipes-nav__list">
        {info.map((item) => (
          <Items title={item} />
        ))}
      </ul>
    </nav>
  );
};

export default ListRecipe;
