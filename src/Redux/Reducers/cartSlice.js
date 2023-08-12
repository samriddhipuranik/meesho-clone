import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    total: 0,
};

// Load cart data from localStorage if available
const savedCartData = localStorage.getItem('cart');
const parsedCartData = savedCartData ? JSON.parse(savedCartData) : null;
if (parsedCartData) {
    initialState.list = parsedCartData.list;
    initialState.total = parsedCartData.total;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.list.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.list.push(action.payload);
            }

            // state.total += quantity;

            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.list.find((item) => item.id === itemId);

            if (existingItem) {
                state.total -= existingItem.quantity;
                state.list = state.list.filter((item) => item.id !== itemId);

                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        updateOrderTotal(state, action) {
            state.total = action.payload;
            const cartData = {
                list: state.list,
                total: state.total,
            };
            localStorage.setItem("cart", JSON.stringify(cartData));
        },
        remove: (state) => {
            state.list = [];
            state.total = 0;

            localStorage.removeItem('cart');
        },
    },
});

export const { addToCart, removeFromCart, updateOrderTotal, remove } = cartSlice.actions;

export default cartSlice.reducer;
