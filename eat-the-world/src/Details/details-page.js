import './details.scss';
import sopa from 'assets/img/sopa.jpg';
import starIcon from 'assets/icons/star.svg';
import shareIcon from 'assets/icons/share.svg';
import printIcon from 'assets/icons/cil_print.svg';
import getRecipe from 'services/apiServices.js';

export default function DetailsPage({ props }) {
  return (
    <section className="details">
      <div className="details-header">
        <h2 className="details-header__title">Recipes tittle</h2>
        <img
          className="details-picture"
          src={sopa}
          alt="Aqui una foto de lado a lado"
        />
      </div>
      <ul className="details-menu">
        <li className="details-menu__item">
          <img className="details-menu__image" src={starIcon} alt="favorite" />
        </li>
        <li className="details-menu__item">
          <img className="details-menu__image" src={shareIcon} alt="share" />
        </li>
        <li className="details-menu__item">
          <img className="details-menu__image" src={printIcon} alt="print" />
        </li>
      </ul>
      <div className="details-body">
        <div className="details-details">
          <h3 className="details-details__title">Details</h3>
          <div className="details-details-list">
            <p className="details-details-list__item">4 persons</p>
            <p className="details-details-list__item">30 min</p>
          </div>
        </div>
        <div className="details-ingredients">
          <h3 className="details-ingredients__title">Ingredients</h3>
          <div className="details-ingredients-list">
            <p className="details-ingredients-list__item">Tomatoes</p>
            <p className="details-ingredients-list__item">Patatas</p>
          </div>
        </div>
        <div className="details-recipe">
          <h3 className="details-recipe__title">Recipe</h3>
          <p className="details-recipe__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            odio vel quaerat error officia incidunt veritatis, sit praesentium,
            nisi harum aliquid iste rerum eum, rem corporis cumque molestias
            fugiat voluptate!
          </p>
        </div>
        <div>
          <button onClick={getRecipe()}>Call API</button>
        </div>
      </div>
    </section>
  );
}
