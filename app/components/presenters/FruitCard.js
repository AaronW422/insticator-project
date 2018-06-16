import React from 'react';

const FruitCard = ({ fruit, addToCart }) => (
  <div className="fruit-card flex">
    <img className="fruit-thumb" src={fruit.imgSrc} />

    <h4>{fruit.itemName}</h4>

    <div className="fruit-caption flex">
      <p>{`$${(fruit.price)}`}</p>

      <p>{`${(fruit.quantityRemaining)} In Stock`}</p>
    </div>

    <button
      className="button add-cart-button"
      onClick={() => addToCart(fruit)}
      disabled={fruit.quantityRemaining !== 0 ? '' : 'disabled'}>
      {fruit.quantityRemaining > 0 ? 'Add to Cart' : 'Sold Out'}
    </button>
  </div>
)

export default FruitCard;