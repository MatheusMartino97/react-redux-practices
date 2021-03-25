import ADD_TO_CART from './actionTypes'

const addToCartAction = (product) => {
  return {
    type: ADD_TO_CART,
    product
  }
}

export default addToCartAction