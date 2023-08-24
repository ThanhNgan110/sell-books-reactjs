import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "accounts",
  initialState: {
    account: {},
    isLogin: false,
  },
  reducers: {
    loginAccount(state, action){
        state.account = action.payload.account;
        state.isLogin = action.payload.isLogin
    },
    logoutAccount(state, action){
      state.isLogin = action.payload.isLogin
    }
    
  },
});
export const authActions = authSlice.actions;
export default authSlice;
