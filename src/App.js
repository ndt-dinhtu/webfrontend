import React, { useEffect } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from 'page/HomePage';
import Contact from 'page/Contact';
import AboutUs from 'page/AboutUs';
import Cart from 'features/cart/Cart';
import News from 'page/News';
import ProductFeature from 'features/Product';
import ScrollToTop from 'components/scrollToTop/ScrollToTop';
import './App.css';
import TelButton from 'page/TelButton';

function App() {
  const location = useLocation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}> { }
      <ScrollToTop />
      <TelButton/>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route exact path='/' component={HomePage} />
        <Route path="/products" component={ProductFeature} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={AboutUs} />
        <Route path="/cart" component={Cart} />
        <Route path="/news" component={News} />
        <Route path='*' component={NotFound} />

      </Switch>

    </div>
  );
}

export default App;
