import Search from './Search';
import Categories from './Categories';
import './Home.scss';
import { getRecipeByCountry } from 'services/apiServices';

const Home = () => {
  return (
    <section className="home">
      <Search />
      <Categories />
      <button
        onClick={() => getRecipeByCountry().then((item) => console.log(item))}
      >
        Click me
      </button>
    </section>
  );
};

export default Home;
