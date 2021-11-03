import Search from './Search';
import Categories from './Categories';
import './Home.scss';
import { getRecipeByCountry } from 'services/apiServices';

const Home = () => {
  return (
    <section className="home">
      <Search />
      <Categories />
    </section>
  );
};

export default Home;
