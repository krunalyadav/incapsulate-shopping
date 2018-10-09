import React, { Component } from 'react';
import axios from 'axios';
import Items from './items';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/items')
      .then(response => {
        this.setState({ items: response.data.items, cartItems: [] });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return <Items inStockItems={this.state.items} {...this.props} />;
  }
}
