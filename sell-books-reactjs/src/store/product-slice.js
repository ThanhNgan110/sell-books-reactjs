import {createSlice} from "@reduxjs/toolkit";


const productSlice =  createSlice({
    name:"product",
    initialState: {
        items:[],
        single_product:{},
        products:[],
    },
    reducers:{
        loadData(state, action){
            state.items = action.payload; 
        },
        loadProductById(state, action){
            state.single_product = action.payload;
        },
        getAllProduct(state, action){
            state.products = action.payload;

        }
        
        
    }   
});
export const productActions = productSlice.actions;
export default productSlice;

