// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/cart/cartSlice';

import cartMiddleware from './cartMiddleware';
import themeSlice from 'components/themeToggle/themeSlice';

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
  theme: themeSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware), 
});

export default store;
