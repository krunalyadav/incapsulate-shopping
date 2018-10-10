import React, { Component } from 'react';
import Items from './items';

export default class CartDetails extends Component {
  render() {
    return (
      <Items
        inStockItems={this.props.items}
        removeFromCart={this.props.removeFromCart}
      />
    );
  }
}
