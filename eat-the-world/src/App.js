import Header from './common/Header/Header';
import Home from './Home/Home';
import './App.scss';
import Footer from 'common/Footer/Footer';
import ListPage from 'ListPage/ListPage';

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <ListPage />
      <Footer />
    </main>
  );
}

export default App;
