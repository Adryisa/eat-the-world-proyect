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
      <Footer />
    </main>
  );
}

export default App;
