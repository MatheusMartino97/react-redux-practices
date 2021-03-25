import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FailToLogin extends Component {
  render() {
    return(
      <div>
        <h1>Falha ao fazer o login</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Tentar novamente</Link>
        <br/>
        <Link to="/register">Cadastre-se</Link>
      </div>
    )
  }
}

export default FailToLogin