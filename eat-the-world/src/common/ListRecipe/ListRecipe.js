import Items from './items';
import './ListRecipe.scss';

const ListRecipe = () => {
  return (
    <nav className="recipes-nav">
      <ul className="recipes-nav__list">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </ul>
    </nav>
  );
};

export default ListRecipe;
