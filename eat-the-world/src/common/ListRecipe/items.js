import { Link } from 'react-router-dom';
import teriyaki from 'assets/img/teriyaki.jpeg';
import starFavorite from 'assets/icons/star.svg';

const Items = ({ title }) => {
  return (
    <li className="recipes-nav__list-item">
      <Link className="recipes-nav__link" to={`details/334`}>
        <img
          src={teriyaki}
          alt="Teriyaki Chicken"
          className="recipes-nav__item-img"
        />
        <div className="recipes-nav__item-info">
          <h3 className="recipes-nav__info-text">{title}</h3>
          <p className="recipes-nav__info-text">3 servings</p>
          <p className="recipes-nav__info-text">30 minutes</p>
          <p className="recipes-nav__info-text">Asian, peruvian</p>
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

export default Items;
