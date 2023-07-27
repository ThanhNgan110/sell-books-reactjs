import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./product-slice";

const store = configureStore({
    reducer: {products: productSlice.reducer}
});

export default store;
