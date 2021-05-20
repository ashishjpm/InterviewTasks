import React, {useState} from 'react';
import OrderPage from './components/OrderPage';
import OrderTable from './components/OrderTable';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/order">
            <OrderPage></OrderPage>
          </Route>
          <Route path="/table">
            <OrderTable></OrderTable>
          </Route>
          <Route path="/">
            <OrderPage></OrderPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;




// Use Case:
//   * User comes to a burger joint and orders a burger
// * User can choose the ingredients for his burger. The ingredients are Bun, Salad, Cheese Slices and Cutlets
// * The app should have the following features
// * Order a burger with mix of ingredients.
// * List All ordered burgers along with price.
// * Create a service for burger price calculation and  total Sale
// * Search All burgers by Person name, total  total sale by person
// Sample Input may look like this
// Order Burger with the following option
// Name or guy who order
// Bun = 2 (fix price Rs 5 each bun and fix quantity 2 user can not edit the bun quantity)
// salad = yes or no (price Rs 5 , it should be boolean)
// Cheese Slices = (Rs 1 per slice)
// cutlets = (Rs 2 per piece)