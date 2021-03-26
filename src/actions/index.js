import ADD_CUSTOMER from '../actions/actionTypes';

const registerCustomerAction = (customerData) => {
  return {
    type: ADD_CUSTOMER,
    customerData,
  };
};

export default registerCustomerAction;
