import { useAuth0 } from '@auth0/auth0-react';
import loginIcon from 'assets/icons/login.svg';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="header__login-btn" onClick={() => loginWithRedirect()}>
      <img src={loginIcon} alt="login" className="header__login-img" />
    </button>
  );
};

export default LoginButton;
