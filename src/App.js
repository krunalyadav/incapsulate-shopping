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
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(item) {
    this.setState({ cartItems: [...this.state.cartItems, item] });
  }

  removeFromCart(item) {
    this.setState({
      cartItems: [...this.state.cartItems.filter(x => x.id !== item.id)]
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/">
                <h3>Incapsulate Shopping</h3>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/cart">
                <h3 className="pull-right">
                  Cart Items: {this.state.cartItems.length}
                </h3>
              </Link>
            </div>
          </div>
          <hr />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ItemList
                  cartItems={this.state.cartItems}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <CartDetails
                  items={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                />
              )}
            />
            <Route component={ItemList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
