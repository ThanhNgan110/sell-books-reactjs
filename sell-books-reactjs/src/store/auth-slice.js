import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "accounts",
  initialState: {
    account: {},
    isLogin: false,
    accountInfor:{}
  },
  reducers: {
    loginAccount(state, action){
        state.account = action.payload.account;
        state.isLogin = action.payload.isLogin
    },
    checkAccount(state, action){
      state.account = action.payload.account;
      state.isLogin = action.payload.isLogin
     },

    logoutAccount(state, action){
      state.account = action.payload.account
      state.isLogin = action.payload.isLogin;
    },
    profileAccount(state, action){
      state.accountInfor = action.payload;
    }
    
    
  },
});
export const authActions = authSlice.actions;
export default authSlice;
