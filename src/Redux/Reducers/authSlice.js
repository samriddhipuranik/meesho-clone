

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    email: '',
    password: '',
    authentication: false,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        login: (state) => {
            state.authentication = true;
            localStorage.setItem('user', JSON.stringify(state));
        },
        logout: (state) => {
            state.authentication = false;
            state.username = '';
            state.email = '';
            state.password = '';
            localStorage.removeItem('user');
            localStorage.removeItem('cart');
        },
    },
})

export const { register, login, logout } = authSlice.actions

export default authSlice.reducer