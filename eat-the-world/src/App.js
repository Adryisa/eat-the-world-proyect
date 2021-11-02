import { Switch, Route } from 'react-router-dom';
import Header from './common/Header/Header';
import Home from './Home/Home';
import DetailsPage from 'Details/DetailsPage';
import Footer from 'common/Footer/Footer';
import ListPage from 'ListPage/ListPage';
import FavoritesPage from 'Favorites/Favorites';
import './App.scss';

function App() {
  return (
    <main className="main">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipes" exact>
          <ListPage />
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
