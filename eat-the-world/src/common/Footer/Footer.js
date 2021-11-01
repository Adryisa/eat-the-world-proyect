import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2021 Eat the World</p>
      <div className="footer__social-media">
        <img
          src="../icons/pinterest.svg"
          alt="Pinterest icon"
          className="footer__social-media-pinterest"
        />
        <img
          src="../icons/instagram.svg"
          alt="Instagram icon"
          className="footer__social-media-instagram"
        />
        <img
          src="../icons/twitter.svg"
          alt="Twitter icon"
          className="footer__social-media-twiter"
        />
      </div>
    </footer>
  );
};

export default Footer;
