import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
      redirectTo: '/fail',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.returnRedirect = this.returnRedirect.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  validateLogin(email, password, customersList) {
    this.setState({
      shouldRedirect: false,
    });

    const customerWithThisEmail = customersList.find((customer) => {
      return customer.email === email;
    });

    console.log(customerWithThisEmail);

    if (customerWithThisEmail) {
      if (customerWithThisEmail.password === password) {
        this.setState({
          redirectTo: '/success',
        });
      } else {
        this.setState({
          redirectTo: '/fail',
        });
      }
    } else {
      this.setState({
        redirectTo: '/fail',
      });
    }

    this.setState({
      shouldRedirect: true,
    });
  }

  returnRedirect() {
    return this.state.shouldRedirect === true ? (
      <Redirect to={this.state.redirectTo} />
    ) : null;
  }

  render() {
    const { email, password } = this.state;
    const { customersList } = this.props;

    return (
      <div>
        <div id="inputs" onChange={this.handleChange}>
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
              this.validateLogin(email, password, customersList);
            }}
          >
            Login
          </button>
        </div>
        <Link to="/">Home</Link>
        {this.returnRedirect()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customersList: state.registerReducer.customersList,
  };
};

export default connect(mapStateToProps)(Login);
