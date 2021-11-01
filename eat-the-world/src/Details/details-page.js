export default function DetailsPage({ props }) {
  return (
    <main className="details-main">
      <h2 className="title">{title}</h2>
      <img className="picture" src={image} alt={title} />
      <ul className="icons">
        <li className="icons__favorite">
          <a href=""></a>
        </li>
        <li className="icons__share">
          <a href=""></a>
        </li>
        <li className="icons__print">
          <a href=""></a>
        </li>
      </ul>
      <ul class="details-list">
        <li class="details-list__detail">
          <a href="">DETAIL CLASS</a>
        </li>
      </ul>
      <ul class="ingredients-list">
        <li class="ingredients-list__ingredients">INGREDIENTS CLASS</li>
      </ul>
      <p class="recipe">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis odio
        vel quaerat error officia incidunt veritatis, sit praesentium, nisi
        harum aliquid iste rerum eum, rem corporis cumque molestias fugiat
        voluptate!
      </p>
    </main>
  );
}
