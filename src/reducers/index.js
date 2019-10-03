import { combineReducers } from 'redux';
import landing from './LandingReducer';
import itemDetail from './ItemDetailReducer';
import cart from './CartReducer';

export default combineReducers({
  landing,
  itemDetail,
  cart
});
