import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Prom from './components/Prom';
import Weddings from './components/Weddings';
// "homepage": "http://bbridals.github.io/bbridals-site",
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/prom" component={Prom} title="Prom"/>
             <Route exact path="/weddings" component={Weddings} />
             <Route exact path="/customers" component={Customers} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
