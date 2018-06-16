import React, { Component } from 'react';
import { connect } from 'react-redux';
import FruitCard from '../presenters/FruitCard';
import { addToCart, fetchFruits } from '../../reducers';

class FruitContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruits();
  }

  render() {
    const { addToCart, fruits } = this.props;

    return (
      <div className="fruit-container flex">
        {fruits.map(fruit =>
          <FruitCard
            key={fruit.id}
            fruit={fruit}
            addToCart={addToCart} />
        )}
      </div>
    )
  }
}

const mapState = state => ({
  fruits: state.fruits
})

const mapDispatch = dispatch => ({
  fetchFruits: () => dispatch(fetchFruits()),
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(
  mapState,
  mapDispatch
)(FruitContainer);