import React, { Component } from 'react';
import axios from 'axios';
import Items from './items';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const cartItems = this.props.cartItems.map(item => item.id);
    axios
      .get('http://localhost:3001/items')
      .then(response => {
        let inStockItems = response.data.items.filter(item => {
          return cartItems.indexOf(item.id) === -1;
        });
        this.setState({
          items: inStockItems
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  addToCart(item) {
    let inStockItems = this.state.items.filter(x => x.id !== item.id);
    this.setState({ items: inStockItems });
    this.props.addToCart(item);
  }

  render() {
    return (
      <Items
        inStockItems={this.state.items}
        isAddToCart
        addToCart={this.addToCart}
      />
    );
  }
}
