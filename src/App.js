import ProductFeature from 'features/Product';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/Footer/Footer';
import Secssion1 from 'components/Secssion1/Secssion1';
import Contact from 'components/Contact/Contact';
import Header from 'components/Header/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <Secssion1 />
      <Contact />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />


        <Route path="/products" component={ProductFeature} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
