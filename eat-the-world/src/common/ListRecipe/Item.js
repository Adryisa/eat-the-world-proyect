import { Link } from 'react-router-dom';
import starFavorite from 'assets/icons/star.svg';

const Item = ({ item }) => {
  return (
    <li className="recipes-nav__list-item">
      <Link className="recipes-nav__link" to={`details/${item.id}`}>
        <img
          src={item.picture}
          alt={`${item.name} meal`}
          className="recipes-nav__item-img"
        />
        <div className="recipes-nav__item-info">
          <h3 className="recipes-nav__info-text">{item.name}</h3>
          <p className="recipes-nav__info-text">{item.country}</p>
          <img
            src={starFavorite}
            alt="favorites icon"
            className="recipes-nav__star"
          />
        </div>
      </Link>
    </li>
  );
};

export default Item;
