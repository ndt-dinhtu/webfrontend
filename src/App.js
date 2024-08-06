import ProductFeature from 'features/Product';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from 'page/HomePage';
import Contact from 'page/Contact';
import AboutUs from 'page/AboutUs';


function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route exact path='/' component={HomePage} />
        <Route path="/products" component={ProductFeature} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={AboutUs} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
