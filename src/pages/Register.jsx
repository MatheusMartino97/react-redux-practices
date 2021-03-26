import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import registerCustomerAction from '../actions';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      animal: 'none',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { registerCustomer } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        <h1>Cadastro</h1>
        <div className="inputs" onChange={this.handleChange}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              placeholder="Digite seu email"
              id="email"
              value={email}
            />
          </label>
          <br />
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              placeholder="Digite sua senha"
              id="password"
              value={password}
            />
          </label>
          <br />
          <label htmlFor="animail">
            Você prefere:
            <select name="aminal-select" id="animal">
              <option value="none">Opções</option>
              <option value="dog">Cachorro</option>
              <option value="cat">Gato</option>
            </select>
          </label>
          <br />
          <button
            type="button"
            onClick={() => {
              if (this.state.animal !== 'none') {
                if (this.state.animal === 'cat') {
                  const validateAnimal = window.confirm('Tem certeza que gosta de gatos?')

                  if (validateAnimal === true) {
                    registerCustomer(this.state);

                    this.setState({
                      email: '',
                      password: '',
                    });

                    return
                  }

                  return
                }
                registerCustomer(this.state);

                this.setState({
                  email: '',
                  password: '',
                });
              } else {
                window.alert('Favor escolher um animal')
              }
            }}
          >
            Cadastrar
          </button>
        </div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerCustomer: (customerData) =>
      dispatch(registerCustomerAction(customerData)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
