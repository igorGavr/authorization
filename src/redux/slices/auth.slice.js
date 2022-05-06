import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {authService} from "../../services";

const initialState = {
    isAuth: null,
    loginError: null
}
const login = createAsyncThunk(
    'login',
    async ({user}) => {
        const {data} = await authService.getTokens(user)
        return data
    }
);
let authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true
                state.loginError = false
                const {access, refresh} = action.payload;
                localStorage.setItem('access',access)
                localStorage.setItem('refresh',refresh)
            })
            .addCase(login.rejected, state => {
                state.loginError = true
            })
    }
});

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    login
}

export {
    authReducer,
    authActions
}