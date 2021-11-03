import './Header.scss';
import loginIcon from '../../assets/icons/login.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Eat the World</h1>
      <div className="header__hamburger-login">
        <img src={loginIcon} alt="login" className="header__login-img" />
      </div>
    </header>
  );
};

export default Header;
