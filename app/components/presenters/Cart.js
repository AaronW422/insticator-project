import React from 'react';
import CartCardContainer from '../containers/CartCardContainer';

const Cart = ({ cart, clearCart, cartCheckout }) => {
  const cartArray = Object.values(cart);

  return (
    <div className="cart-container flex">
      <h2>{`Your Cart - ${cartArray.length} Item(s)`}</h2>

      <CartCardContainer />

      <h2 className="cart-total">
        {`Total: $${cartArray
          .reduce((acc, currItem) =>
            acc + (currItem.price * currItem.quantity), 0)
          .toFixed(2)}`}
      </h2>

      <div className="cart-buttons">
        <button
          className="button cart-clear-button"
          onClick={clearCart} >
          Clear Cart
      </button>

        <button
          className="button cart-checkout-button"
          onClick={() => cartCheckout(cart)} >
          Checkout
      </button>
      </div>

    </div>
  )
}

export default Cart;