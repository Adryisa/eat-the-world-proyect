import './details.scss';
import sopa from 'assets/img/sopa.jpg';
import starIcon from 'assets/icons/star.svg';
import shareIcon from 'assets/icons/share.svg';
import printIcon from 'assets/icons/cil_print.svg';
import { useParams } from 'react-router-dom';
import { useApiContext } from 'contexts/ApiContext';
import Ingredients from './Ingredients';

export default function DetailsPage({ props }) {
  let { id } = useParams();
  const { list } = useApiContext();
  const recipe = list.find((item) => item.id === id);
  console.log(recipe);

  return (
    <section className="details">
      <div className="details-header">
        <h2 className="details-header__title">{recipe.name}</h2>
        <img
          className="details-picture"
          src={recipe.picture}
          alt={recipe.name}
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
        <div className="details-ingredients">
          <h3 className="details-ingredients__title">Ingredients</h3>
          <div className="details-ingredients-list">
            <Ingredients ingredients={recipe.ingredients} />
          </div>
        </div>
        <div className="details-recipe">
          <h3 className="details-recipe__title">Recipe</h3>
          <p className="details-recipe__text">{recipe.instructions}</p>
        </div>
      </div>
    </section>
  );
}
