import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice:0,
  },
  reducers: {
    replaceProductFromCart(state, action){
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity

    },

    insertProductFromCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      let existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(newItem.price);
      if (!existingItem) {
        console.log('test1');
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          content: newItem.content,
          author: newItem.author,
          image: newItem.image,
          quantity: newItem.quantity,
          price: newItem.price
        });
      } else {
        console.log('test2');
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      } 
      state.totalQuantity ++;    
      state.totalPrice = newItem.price * newItem.quantity
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
