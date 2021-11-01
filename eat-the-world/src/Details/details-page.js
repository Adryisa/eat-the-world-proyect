import './styles.scss';

export default function DetailsPage({ props }) {
  return (
    <main className="details-main">
      <div className="title">
        <h2 className="title__text">Recipes tittle</h2>
      </div>
      <img className="picture" src="" alt="Aqui una foto" />
      <ul className="icons">
        <li className="icons__favorite">
          F<img href="../../public/icons/star.svg" />
        </li>
        <li className="icons__share">
          S<img href="../../public/icons/star.svg" />
        </li>
        <li className="icons__print">
          P<img href="../../public/icons/star.svg" />
        </li>
      </ul>
      <div className="details">
        <h3 className="details__title">Details</h3>
        <ul className="details__list">
          <li className="details__list--detail">4 persons</li>
        </ul>
      </div>
      <div className="ingredients">
        <h3 className="ingredients__title">Ingredients</h3>
        <ul className="ingredients__list">
          <li className="ingredients__list--ingredients">Tomatoes</li>
        </ul>
      </div>
      <div className="recipe">
        <h3 className="recipe__title">Recipe</h3>
        <p className="recipe__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          odio vel quaerat error officia incidunt veritatis, sit praesentium,
          nisi harum aliquid iste rerum eum, rem corporis cumque molestias
          fugiat voluptate!
        </p>
      </div>
    </main>
  );
}
