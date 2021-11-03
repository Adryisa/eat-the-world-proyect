import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/favorites">Favorites</Link>
    </Menu>
  );
};

export default Sidebar;
