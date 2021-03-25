import ADD_TO_CART from '../actions/actionTypes'

const INITIAL_STATE = {
  cart: [],
  totalPrice: 0,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.product],
        totalPrice: state.totalPrice + action.product.price,
      }
    
      default:
        return state;
  }
}

export default cartReducer