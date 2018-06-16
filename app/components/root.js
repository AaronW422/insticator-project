import React from 'react';
import FruitContainer from './containers/FruitContainer';
import CartContainer from './containers/CartContainer';

const App = () => (
  <div className="flex">
    <FruitContainer />
    <CartContainer />
  </div>
)

export default App;