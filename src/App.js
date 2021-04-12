import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import ContactPage from './pages/contactpage/contactpage.component.jsx';
import Car from './pages/car/car.component.jsx';
import Footer from './components/footer.component.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/cars' component={ Car } />
        <Route exact path='/categories' component={ Homepage } />
        <Route exact path='/contact' component={ ContactPage } />
      </Switch>
      <Footer/>
    </Fragment>
  );
}

export default App;