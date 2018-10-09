import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import ItemList from './components/item-list';
import CartDetails from './components/cart-details';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  addToCart(item) {
    console.log(item);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="cart-link">
                <h3>Incapsulate Shopping</h3>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/cart" className="cart-link">
                <h3 className="pull-right">Cart Items: {0}</h3>
              </Link>
            </div>
          </div>
          <hr />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ItemList addToCart={this.addToCart} />}
            />
            <Route path="/cart" component={CartDetails} />
            <Route component={ItemList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
