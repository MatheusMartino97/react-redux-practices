import ADD_CUSTOMER from '../actions/actionTypes'

const INITIAL_STATE = {
  costumersList: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state.costumersList, action.costumerData];

    default:
      return state
  }
};

export default registerReducer
