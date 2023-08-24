import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";

const store = configureStore({
    reducer: { accounts: authSlice.reducer, products: productSlice.reducer, carts: cartSlice.reducer }
});

export default store;
