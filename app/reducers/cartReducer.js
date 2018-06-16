import axios from 'axios';
import { fetchFruits } from './index';

// Actions
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREASE_ITEM_QTY = 'INCREASE_ITEM_QTY';
export const DECREASE_ITEM_QTY = 'DECREASE_ITEM_QTY';
export const CART_CHECKOUT = 'CART_CHECKOUT';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  id: item.id,
  item
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID
})

export const increaseItemQty = (id) => ({
  type: INCREASE_ITEM_QTY,
  id
})

export const decreaseItemQty = (id) => ({
  type: DECREASE_ITEM_QTY,
  id
})

export const cartCheckout = (cart) => (dispatch) =>
  Promise.all(Object.values(cart).map(item =>
    axios.put(`api/fruits/${item.id}`, {
      newQuantity: item.quantityRemaining - item.quantity
    })
  ))
    .then(() => {
      dispatch(clearCart())
      dispatch(fetchFruits())
    })
    .catch(err => console.error('Error with Cart Checkout: ', err))

export default (cart = {}, action) => {
  const newState = Object.assign({}, cart);
  const itemID = action.id;

  switch (action.type) {
    case ADD_TO_CART:
      if (!cart[itemID]) {
        newState[itemID] = action.item;
        newState[itemID].quantity = 1;
      }
      return newState;

    case REMOVE_ITEM:
      delete newState[action.itemID];
      return newState;

    case INCREASE_ITEM_QTY:
      if (cart[itemID].quantity < cart[itemID].quantityRemaining) newState[itemID].quantity++;
      return newState;

    case DECREASE_ITEM_QTY:
      if (1 < cart[itemID].quantity) newState[itemID].quantity--;
      return newState;

    case CLEAR_CART:
      return {};

    default:
      return cart;
  }
}