import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: null,
};

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const { setProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
