import './Header.scss';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import loginIcon from '../../assets/icons/login.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Eat the World</h1>
      <div className="header__hamburger-login">
        <img src={hamburgerIcon} alt="menu" className="header__hamburger-img" />
        <img src={loginIcon} alt="login" className="header__login-img" />
      </div>
    </header>
  );
};

export default Header;
