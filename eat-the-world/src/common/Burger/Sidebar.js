import { slide as Menu } from 'react-burger-menu';
import forks from 'assets/icons/forks-white.svg';
import star from 'assets/icons/start-white.svg';
import home from 'assets/icons/white-house.svg';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Link to="/" alt="login">
        <img src={home} alt="login" className="slide__icon" />
        Home
      </Link>
      <Link to="/recipes" alt="login">
        <img src={forks} alt="login" className="slide__icon" />
        Recipes
      </Link>
      <Link to="/favorites" alt="login">
        <img src={star} alt="login" className="slide__icon" />
        Favorites
      </Link>
    </Menu>
  );
};

export default Sidebar;
