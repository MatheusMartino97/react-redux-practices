import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value 
    })
  }

  render() {
    return (
      <div>
        <div className="inputs" onChange={ this.handleChange }>
          <label htmlFor="email">
            Email:
            <input type="text" placeholder="Digite seu email" id="email" />
          </label>
          <br/>
          <label htmlFor="password">
            Senha:
            <input type="text" placeholder="Digite sua senha" id="password" />
          </label>
          <br/>
          <button type="button" onClick={ () => {} }>Cadastrar</button>
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}



export default Login;
