import React from 'react'
import { connect } from 'react-redux'

class Cart extends React.Component {
  render() {
    const { cartProducts, totalPrice } = this.props;
    return(
      <div>
        <h2>Carrinho:</h2>
        <ul>
          {cartProducts.map((product, index) => {
            return(
              <li key={ index }>
                { product.name }
              </li>
            )
          })}
        </ul>
        <div>{ totalPrice.toFixed(2) }</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartReducer.cart,
    totalPrice: state.cartReducer.totalPrice
  }
}

export default connect(mapStateToProps, null)(Cart)