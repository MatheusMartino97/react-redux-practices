import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredCustomers extends Component {
  render() {
    const { customersList } = this.props;
    const customersListElement = () => {
      return (
        <ul>
          {customersList.map((customer, index) => {
            return (
              <div>
                <h1>Usuários cadastrados:</h1>
                <li key={index}>
                  <p>
                    Usuário: <em>{customer.email}</em>
                  </p>
                  <p>
                    Senha: <em>{customer.password}</em>
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      );
    };

    return (
      <div>
        <div id="customers-list">
          {customersList.length === 0 ? (
            <h1>Nenhum cadastro encontrado</h1>
          ) : (
            customersListElement()
          )}
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customersList: state.registerReducer.customersList,
  };
};

export default connect(mapStateToProps, null)(RegisteredCustomers);
