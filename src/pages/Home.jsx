import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Sua vaga de emprego está aqui!</h1>
        <footer>
          <Link to="/register" className="nav-link">Buscar emprego</Link>
        </footer>
      </div>
    );
  }
}

export default Home;
