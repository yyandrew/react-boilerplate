function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'buy':
      const basket = state.basket ? [...state.basket] : []
      const existing = basket.findIndex(
        (item) => item.productId === action.payload.productId
      )
      if (existing === -1) {
        basket.push({ quantity: 1, ...action.payload })
      } else {
        basket[existing].quantity = basket[existing].quantity + 1
      }
      return {
        ...state,
        basket,
      }
    case 'clearBasket':
      return {
        ...state,
        basket: [],
      }

    default:
      return { ...state }
  }
}

export default reducer
