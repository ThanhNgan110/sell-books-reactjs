import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {products: productSlice.reducer, carts: cartSlice.reducer }
});

export default store;
