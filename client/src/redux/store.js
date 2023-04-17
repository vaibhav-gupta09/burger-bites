import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import {cartReducer, orderReducer} from './reducers/cartReducer';

const store = configureStore({
    reducer: {
      auth:authReducer,
      cart: cartReducer,
      order: orderReducer
    },
});

export default store;

export const server = "https://burger-bites.onrender.com/api/v1";