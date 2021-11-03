export default function Ingredients({ ingredients }) {
  return (
    <>
      {ingredients.map((item, i) => (
        <p key={i}>
          {item.ingredient} {item.quantity.trim() ? `- ${item.quantity}` : ''}
        </p>
      ))}
    </>
  );
}
