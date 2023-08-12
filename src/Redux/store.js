import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Reducers/authSlice'
import productDetailsReducer from './Reducers/productDetailSlice'
import cartReducer from './Reducers/cartSlice'
import categoryReducer from './Reducers/categorySlice'
import orderHistoryReducer, { initializeOrderHistory } from './Reducers/orderHistorySlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        category: categoryReducer,
        orderHistory: orderHistoryReducer,
    },
})
// Initialize order history from local storage
const storedOrderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
store.dispatch(initializeOrderHistory(storedOrderHistory));


