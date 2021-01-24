import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: getDefaultMiddleware()
})

export default store;
