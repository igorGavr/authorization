import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer} from "./slices";

let rootReducer = combineReducers({
    auth: authReducer
});

let store = configureStore({
    reducer: rootReducer
});

export {
    store
}