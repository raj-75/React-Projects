import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './Counter/Index';
import productsReducer from './Products/index';
import userReducer from './Users/userSlice';
const rootReducer = combineReducers({
  users: counterSlice,
  products: productsReducer,
  user: userReducer,
  // Additional reducers can be combined here
});

export default rootReducer;