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
        <div className="inputs" onChange={this.handleChange}>
          <label htmlFor="email">
            Email:
            <input
              type="text"
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
          <button
            type="button"
            onClick={() => {
              registerCustomer(this.state);

              this.setState({
                email: '',
                password: '',
              });
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
