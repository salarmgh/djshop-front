const CheckoutPrice = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_TOTAL_PRICE':
      return action.data + state;
    case 'DECREASE_TOTAL_PRICE':
      return state - action.data;
    case 'INCREASE_TOTAL_PRICE':
      return state + action.data;
    default:
      return state;
  }
}

export default CheckoutPrice;
