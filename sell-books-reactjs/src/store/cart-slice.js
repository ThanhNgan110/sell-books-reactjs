import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice:0,
  },
  reducers: {
    insertProductFromCart(state, action) {
      // state.items = action.payload
      const newItem = action.payload;
      console.log(newItem);
      let existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(newItem.price);
      if (!existingItem) {
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
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.price =  newItem.price * newItem.quantity
      }
    //   state.totalQuantity = 
      state.totalPrice = newItem.price * newItem.quantity
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
