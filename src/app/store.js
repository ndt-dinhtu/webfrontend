import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/cart/cartSlice';
import cartMiddleware from './cartMiddleware';


const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware), // Thêm middleware
});

export default store;
