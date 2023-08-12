// orderHistorySlice.js

import { createSlice } from '@reduxjs/toolkit';

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    initializeOrderHistory: (state, action) => {
      return action.payload;
    },
  },
});

export const { addOrder, initializeOrderHistory } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
