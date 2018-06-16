import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartCard from '../presenters/CartCard';
import { removeItem, increaseItemQty, decreaseItemQty } from '../../reducers';

class CartCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart, removeItem, increaseItemQty, decreaseItemQty } = this.props;

    return (
      <div className="cart-card-container">
        {Object.values(cart).map(val =>
          <CartCard
            key={val.id}
            item={val}
            removeItem={removeItem}
            increaseItemQty={increaseItemQty}
            decreaseItemQty={decreaseItemQty}
          />
        )}
      </div>
    )
  }
}

const mapState = (state) => ({
  cart: state.cart
})

const mapDispatch = (dispatch) => ({
  removeItem: (itemID) => dispatch(removeItem(itemID)),
  increaseItemQty: (itemID) => dispatch(increaseItemQty(itemID)),
  decreaseItemQty: (itemID) => dispatch(decreaseItemQty(itemID))
})

export default connect(
  mapState,
  mapDispatch
)(CartCardContainer);