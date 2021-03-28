import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Sua vaga de emprego está aqui!</h1>
        <Link to="/register">Buscar emprego</Link>
      </div>
    )
  }
}

export default Home