import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';
import categoriesReducer from './features/categories/categoriesSlice';
import sliderReducer from './features/slider/sliderSlice';
import orderReducer from './features/order/orderSlice';
import { cartLocalStorageMiddleware, loadCartFromLocalStorage } from './middleware/cartLocalStorage';

const preloadedCart = loadCartFromLocalStorage();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    slider: sliderReducer,
    order: orderReducer,
  },
  preloadedState: {
    cart: preloadedCart || { items: [] },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartLocalStorageMiddleware),
});
