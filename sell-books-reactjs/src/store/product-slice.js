import {createSlice} from "@reduxjs/toolkit";


const productSlice =  createSlice({
    name:"product",
    initialState: {items:[]
    },
    reducers:{
        loadData(state, action){
            state.items = action.payload.items
        },
        
    }
    
});
export const productActions = productSlice.actions;
export default productSlice;

