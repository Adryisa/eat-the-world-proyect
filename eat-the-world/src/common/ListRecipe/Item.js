import { useState } from 'react';
import { Link } from 'react-router-dom';
import starIcon from 'assets/icons/star.svg';
import starIconFavorite from 'assets/icons/star-favorite.svg';

const Item = ({ item }) => {
  const [favorite, setFavorite] = useState(item.isFavorite);

  return (
    <li className="recipes-nav__list-item">
      <div className="recipes-nav__link-container">
        <button
          className="recipes-nav__star-button"
          onClick={(e) => setFavorite(!favorite)}
        >
          <img
            src={favorite ? starIconFavorite : starIcon}
            alt={
              favorite ? 'favorite star icon' : 'favorite star icon selected'
            }
          />
        </button>
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
