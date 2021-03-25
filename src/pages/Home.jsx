import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/register">Cadastrar</Link>
      </div>
    );
  }
}

export default Home;
