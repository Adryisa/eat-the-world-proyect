import { Switch, Route } from 'react-router-dom';

import Header from './common/Header/Header';
import Home from './Home/Home';
import './App.scss';
import DetailsPage from 'Details/details-page';
import Footer from 'common/Footer/Footer';
import ListPage from 'ListPage/ListPage';

function App() {
  return (
    <main className="main">
      <Header />
<<<<<<< Updated upstream
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
      </Switch>
=======
      <Home />
      <ListPage />
      <DetailsPage />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <Footer />
    </main>
  );
}

export default App;
