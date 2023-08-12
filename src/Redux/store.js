import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Reducers/authSlice'
import productDetailsReducer from './Reducers/productDetailSlice'
import cartReducer from './Reducers/cartSlice'
import categoryReducer from './Reducers/categorySlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        category: categoryReducer,
    },
})
