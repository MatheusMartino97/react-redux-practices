import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Cadastre-se</Link>
        <br />
        <Link to="/customers">Cadastros</Link>
      </div>
    );
  }
}

export default Home;
