import ADD_CUSTOMER from '../actions/actionTypes'

const INITIAL_STATE = {
  customersList: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        customersList: [...state.customersList, action.customerData]
      }

    default:
      return state
  }
};

export default registerReducer
