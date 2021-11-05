import { useState } from 'react';
import { useApiContext } from 'contexts/ApiContext';
import starIcon from 'assets/icons/star.svg';
import starIconFavorite from 'assets/icons/star-favorite.svg';
import { addFavorites } from 'services/userServices';

const ButtonStar = ({ item, type = 'api', className }) => {
  const [favorite, setFavorite] = useState(item.isFavorite);
  const { deleteOneRecipeNoDispatch, deleteOneRecipe } = useApiContext();

  const handleClick = () => {
    if (favorite) {
      type === 'user' ? deleteOneRecipe(item) : deleteOneRecipeNoDispatch(item);
    } else {
      addFavorites({ ...item, isFavorite: true });
    }
    setFavorite(!favorite);
  };

  return (
    <button className={className} onClick={handleClick}>
      <img
        src={favorite ? starIconFavorite : starIcon}
        alt={favorite ? 'favorite star icon' : 'favorite star icon selected'}
      />
    </button>
  );
};

export default ButtonStar;
