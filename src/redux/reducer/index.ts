import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import cartReducer from '../slices/cartSlice';
import { authApi, cartsApi, ordersApi } from '@/services';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
  [cartsApi.reducerPath]: cartsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
});

export default rootReducer;
