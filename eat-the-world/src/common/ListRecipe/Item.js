import { Link } from 'react-router-dom';
import ButtonStar from 'common/Button/ButtonStar';

const Item = ({ item, type }) => {
  return (
    <li className="recipes-nav__list-item">
      <div className="recipes-nav__link-container">
        <ButtonStar
          item={item}
          type={type}
          className="recipes-nav__star-button"
        />
        <Link className="recipes-nav__link" to={`details/${item.recipeId}`}>
          <img
            src={item.picture}
            alt={`${item.name} meal`}
            className="recipes-nav__item-img"
          />
          <div className="recipes-nav__item-info">
            <h3 className="recipes-nav__info-header">{item.name}</h3>
            <p className="recipes-nav__info-text">{item.country}</p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Item;
