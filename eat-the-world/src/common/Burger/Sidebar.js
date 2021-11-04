import { slide as Menu } from 'react-burger-menu';
import star from 'assets/icons/start-white.svg';
import home from 'assets/icons/white-house.svg';
import user from 'assets/icons/user-icon.svg';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Link to="/">
        <img src={home} alt="home icon" className="slide__icon" />
        Home
      </Link>
      <Link to="/favorites">
        <img src={star} alt="favorites icon" className="slide__icon" />
        Favorites
      </Link>
      <Link to="/profile">
        <img src={user} alt="user icon" className="slide__icon" />
        Profile
      </Link>
    </Menu>
  );
};

export default Sidebar;
