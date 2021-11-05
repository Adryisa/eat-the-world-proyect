import Item from './Item';
import './ListRecipe.scss';

const ListRecipe = ({ list }) => {
  return (
    <nav className="recipes-nav">
      <ul className="recipes-nav__list">
        {list.map((item) => (
          <Item key={`${item.recipeId} ${item.isFavorite}`} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default ListRecipe;
