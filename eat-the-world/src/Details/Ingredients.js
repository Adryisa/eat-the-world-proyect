export default function Ingredients({ ingredients }) {
  return (
    <>
      {ingredients.map((item) => (
        <p>
          {item.ingredient} {item.quantity.trim() ? `- ${item.quantity}` : ''}
        </p>
      ))}
    </>
  );
}
