import LoginButton from './LoginButton';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Eat the World</h1>
      <div className="header__hamburger-login">
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
