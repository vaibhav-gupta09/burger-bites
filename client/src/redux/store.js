import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import {cartReducer} from './reducers/cartReducer';
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";
import { messageReducer } from "./reducers/messageReducer";

const store = configureStore({
    reducer: {
      auth:authReducer,
      cart: cartReducer,
      order: orderReducer,
      orders: ordersReducer,
      admin: adminReducer,
      message: messageReducer
    },
});

export default store;

export const server = "https://burger-bites.onrender.com/api/v1";
// export const server = "http://localhost:4000/api/v1";