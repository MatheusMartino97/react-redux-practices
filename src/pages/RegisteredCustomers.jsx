import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class RegisteredCustomers extends Component {
  render() {
    const { customersList } = this.props;

    return (
      <div>
        <div id="customers-list">
          <ul>
            {customersList.map((customer, index) => {
              return (
                <li key={index}>
                  <p>
                    Usuário: <em>{customer.email}</em>
                  </p>
                  <p>
                    Senha: <em>{customer.password}</em>
                  </p>
                </li>
              );
            })}
          </ul>
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
