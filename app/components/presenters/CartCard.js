import React from 'react';

const CartCard = ({ item, removeItem, increaseItemQty, decreaseItemQty }) => (
  <div className="cart-card flex">
    <img className="item-thumb" src={item.imgSrc} />

    <div className="item-info flex">
      <h3>{item.itemName}</h3>

      <button
        className="button dec-qty-button"
        onClick={() => increaseItemQty(item.id)}
      >+</button>

      <p>{item.quantity}</p>

      <button
        className="button inc-qty-button"
        onClick={() => decreaseItemQty(item.id)}
      >-</button>

      <p>{`@ $${item.price} each = `}<strong>${(item.price * item.quantity).toFixed(2)}</strong></p>

      <button
        className="button remove-item-button"
        onClick={() => removeItem(item.id)}
      >Remove</button>
    </div>
  </div>
)

export default CartCard;