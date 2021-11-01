const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Eat the World</h1>
      <div className="header__hamburger-login">
        <img
          src="../icons/hamburger.svg"
          alt="menu"
          className="header__hamburger-img"
        />
        <img
          src="../icons/login.svg"
          alt="login"
          className="header__login-img"
        />
      </div>
    </header>
  );
};

export default Header;
