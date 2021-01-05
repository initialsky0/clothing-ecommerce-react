import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage/HomePage-component';
import ShopPage from './pages/ShopPage/Shop-component';
import UserForms from './pages/UserForms/UserForms-component';
import Header from './components/Header/Header-component';

function App() {
  return (
    <div>
      {/* 
        // example for rendering all 
        <Route exact path='/' component={HomePage} /> 
        <Route path='/hats' component={HatsPage}>
      */}

      <Header />

      {/* //Example of only rendering matched path once */}
      <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={UserForms} />
      </Switch>
    </div>
  );
}

export default App;
