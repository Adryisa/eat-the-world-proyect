import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useApiContext } from 'contexts/ApiContext';
import starIcon from 'assets/icons/star.svg';
import starIconFavorite from 'assets/icons/star-favorite.svg';
import { addFavorites } from 'services/userServices';

const ButtonStar = ({ item, type = 'api', className }) => {
  const { isAuthenticated, user } = useAuth0();
  const [favorite, setFavorite] = useState(item.isFavorite);
  const { deleteOneRecipeNoDispatch, deleteOneRecipe } = useApiContext();

  const handleClick = () => {
    if (favorite) {
      type === 'user' ? deleteOneRecipe(item) : deleteOneRecipeNoDispatch(item);
    } else {
      addFavorites({ ...item, isFavorite: true, userEmail: user.email });
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
