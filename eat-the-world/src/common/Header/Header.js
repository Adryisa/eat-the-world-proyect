import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Eat the World</h1>
      <div className="header__hamburger-login">
        <LoginButton />
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
