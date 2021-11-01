import './Footer.scss';
import pinterestIcon from '../../assets/icons/pinterest.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2021 Eat the World</p>
      <div className="footer__social-media">
        <img
          src={pinterestIcon}
          alt="Pinterest icon"
          className="footer__social-media-icon"
        />
        <img
          src={instagramIcon}
          alt="Instagram icon"
          className="footer__social-media-icon"
        />
        <img
          src={twitterIcon}
          alt="Twitter icon"
          className="footer__social-media-icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
