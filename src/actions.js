import {REMOVE, INCREASE, DECREASE, TOGGLE_AMOUNT, CLEAR_CART, GET_TOTALS} from './Constants'


export const removeItem = id => {
   return {type: REMOVE, payload: {id}}
}

export const increaseItem = id => {
  return {type: INCREASE, payload: {id}}
}

export const decreaseItem = id => {
  return {type: DECREASE, payload: {id}}
}

// ----------- or replace increase and decrease
export const toggleAmount = (id, toggle) => {
  return {type: TOGGLE_AMOUNT, payload: {id, toggle}}
}

export const clearCart = (cart) => {
  return {type: CLEAR_CART, payload: cart}
}

export const getTotals = () => {
  return {type: GET_TOTALS}
}