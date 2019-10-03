/*
 * @Author: Devesh Agnihotri
 * @Date: 2019-10-03 04:48:13
 * @Last Modified by:   Devesh Agnihotri
 * @Last Modified time: 2019-10-03 04:48:13
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/screens/landingPage';
import ItemDetail from './components/screens/itemDetailPage';
import CartItem from './components/screens/cartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/itemdetail" component={ItemDetail} />
        <Route path="/cart" component={CartItem} />
      </Switch>
    </Router>
  );
}

export default App;
