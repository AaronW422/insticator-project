import { combineReducers } from 'redux';
import fruitReducer from './fruitReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  fruits: fruitReducer,
  cart: cartReducer
});

export default rootReducer;
export * from './cartReducer';
export * from './fruitReducer';