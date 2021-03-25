import React from 'react';
import products from '../data';
import addToCartAction from '../actions'
import { connect } from 'react-redux'

class Products extends React.Component {
  validateStock(product, cartProducts, addToCart) {
    const thisProductInCart = cartProducts.filter((item) => {

      return item.name === product.name
    })

    if (thisProductInCart.length < product.inStock) {
      addToCart(product)
    }
  }
  render() {
    const { addToCart, cartProducts } = this.props

    return (
      <div>
        <h2>Produtos disponíveis:</h2>
        <table>
          <thead>
            <tr>
              <th align="left">Produto:</th>
              <th align="left">Preço:</th>
              <th align="left">Estoque:</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.inStock}</td>
                  <td>
                    <button 
                      type="button" 
                      onClick={() => this.validateStock(product, cartProducts, addToCart)}
                    >
                      Adicionar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartReducer.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCartAction(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
