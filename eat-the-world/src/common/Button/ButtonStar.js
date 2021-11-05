import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useUserState from 'hooks/useUserState';
import starIcon from 'assets/icons/star.svg';
import starIconFavorite from 'assets/icons/star-favorite.svg';

const ButtonStar = ({ item, type = 'api', className }) => {
  const { isAuthenticated } = useAuth0();
  const [favorite, setFavorite] = useState(item.isFavorite);
  const { deleteOneRecipeNoDispatch, deleteOneRecipe, addOneRecipeNoDispatch } =
    useUserState();

  const handleClick = () => {
    if (favorite) {
      type === 'user' ? deleteOneRecipe(item) : deleteOneRecipeNoDispatch(item);
    } else {
      addOneRecipeNoDispatch(item);
    }
    setFavorite(!favorite);
  };

  return (
    isAuthenticated && (
      <button className={className} onClick={handleClick}>
        <img
          src={favorite ? starIconFavorite : starIcon}
          alt={favorite ? 'favorite star icon' : 'favorite star icon selected'}
        />
      </button>
    )
  );
};

export default ButtonStar;
