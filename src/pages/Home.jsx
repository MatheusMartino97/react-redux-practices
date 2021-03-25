import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Cadastrar</Link>
        <br />
        <Link to="/customers">Cadastros</Link>
      </div>
    );
  }
}

export default Home;
