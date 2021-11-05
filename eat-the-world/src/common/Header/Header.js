import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './Header.scss';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header className="header">
        <h1 className="header__title">Eat the World</h1>
        <div className="header__hamburger-login">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </header>
      <div className="header__spacer" />
    </>
  );
};

export default Header;
