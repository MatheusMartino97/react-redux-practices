import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Cart />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default ShoppingCart;
