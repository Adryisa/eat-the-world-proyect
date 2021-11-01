import './Search.scss';
import backgroundImage from '../assets/img/fruits-background.jpg';
import searchIcon from '../assets/icons/magnifying-glass.svg';

const Search = () => {
  return (
    <section className="search-container">
      <h2 className="search-container__header">
        What do you want to eat today?
      </h2>
      <img
        className="search-container__background"
        src={backgroundImage}
        alt="A variety of fruits and vegetables"
      />
      <form className="search-container-form">
        <label
          className="search-container-form__label"
          htmlFor="search-container-form__input"
        >
          Search
        </label>
        <input
          className="search-container-form__input"
          id="search-container-form__input"
        />
        <button className="search-container-form__button">
          <img
            src={searchIcon}
            className="search-container-form__icon"
            alt="Magnifying glass icon"
          />
        </button>
      </form>
    </section>
  );
};

export default Search;
