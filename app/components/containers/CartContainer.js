import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../presenters/Cart';
import { clearCart, cartCheckout } from '../../reducers';

class CartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart, clearCart, cartCheckout, fetchFruits } = this.props;

    return (
      <Cart
        cart={cart}
        clearCart={clearCart}
        cartCheckout={cartCheckout}
        fetchFruits={fetchFruits} />
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

const mapDispatch = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  cartCheckout: (cart) => dispatch(cartCheckout(cart)),
  fetchFruits: () => dispatch(fetchFruits())
})

export default connect(
  mapState,
  mapDispatch
)(CartContainer);