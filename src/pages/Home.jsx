import React from 'react';
import Products from '../components/Products';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Products />
        <Link to="/cart">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
