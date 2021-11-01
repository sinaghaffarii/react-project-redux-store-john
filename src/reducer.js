import {CLEAR_CART, REMOVE, INCREASE, DECREASE, TOGGLE_AMOUNT, GET_TOTALS} from "./Constants";
import cartItems from "./Components/data";


const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}


function reducer(state = initialStore, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {...state, cart: []}
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id !== action.payload.id)
      }
    case INCREASE:
      let incTempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount + 1}
        }
        return cartItem
      })
      return {...state, cart: incTempCart}
    case DECREASE:
      let decTempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount - 1}
        }
        return cartItem
      }).filter((cartItem) => cartItem.amount !== 0)
      return {...state, cart: decTempCart}
    // --------- OR replace increase and decrease
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if(cartItem.id === action.payload.id) {
            if(action.payload.toggle === 'inc') {
              return {...cartItem, amount: cartItem.amount + 1}
            }
            if(action.payload.toggle === 'dec') {
              return {...cartItem, amount: cartItem.amount - 1}
            }
          }
          return cartItem
        })
      }

    case GET_TOTALS:
      let {amount, total} = state.cart.reduce((cartTotal,cartItem) => {
        const {amount,price} = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount

        return cartTotal
      }, {total: 0, amount: 0})
      total = parseFloat(total.toFixed(2))
      return {...state, amount, total}
    default:
      return state
  }
}


export default reducer;