import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { rootReducer } from "./Reducer/RootReducer";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer:{rootReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})