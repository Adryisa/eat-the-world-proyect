import './ListRecipe.scss';
import teriyaki from 'assets/img/teriyaki.jpeg';
import starFavorite from 'assets/icons/star.svg';

const ListRecipe = () => {
  return (
    <nav className="recipes-nav">
      <ul className="recipes-nav__list">
        <li className="recipes-nav__list-item">
          <img
            src={teriyaki}
            alt="Teriyaki Chicken"
            className="recipes-nav__item-img"
          />
          <div className="recipes-nav__item-info">
            <h3 className="recipes-nav__info-text">Title</h3>
            <p className="recipes-nav__info-text">3 servings</p>
            <p className="recipes-nav__info-text">30 minutes</p>
            <p className="recipes-nav__info-text">Asian, peruvian</p>
            <img
              src={starFavorite}
              alt="favorites icon"
              className="recipes-nav__star"
            />
          </div>
        </li>
        <li className="recipes-nav__list-item">
          <img
            src={teriyaki}
            alt="Teriyaki Chicken"
            className="recipes-nav__item-img"
          />
          <div className="recipes-nav__item-info">
            <h3 className="recipes-nav__info-text">Title</h3>
            <p className="recipes-nav__info-text">3 servings</p>
            <p className="recipes-nav__info-text">30 minutes</p>
            <p className="recipes-nav__info-text">Asian, peruvian</p>
            <img
              src={starFavorite}
              alt="favorites icon"
              className="recipes-nav__star"
            />
          </div>
        </li>
        <li className="recipes-nav__list-item">
          <img
            src={teriyaki}
            alt="Teriyaki Chicken"
            className="recipes-nav__item-img"
          />
          <div className="recipes-nav__item-info">
            <h3 className="recipes-nav__info-text">Title</h3>
            <p className="recipes-nav__info-text">3 servings</p>
            <p className="recipes-nav__info-text">30 minutes</p>
            <p className="recipes-nav__info-text">Asian, peruvian</p>
            <img
              src={starFavorite}
              alt="favorites icon"
              className="recipes-nav__star"
            />
          </div>
        </li>
        <li className="recipes-nav__list-item">
          <img
            src={teriyaki}
            alt="Teriyaki Chicken"
            className="recipes-nav__item-img"
          />
          <div className="recipes-nav__item-info">
            <h3 className="recipes-nav__info-text">Title</h3>
            <p className="recipes-nav__info-text">3 servings</p>
            <p className="recipes-nav__info-text">30 minutes</p>
            <p className="recipes-nav__info-text">Asian, peruvian</p>
            <img
              src={starFavorite}
              alt="favorites icon"
              className="recipes-nav__star"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default ListRecipe;
