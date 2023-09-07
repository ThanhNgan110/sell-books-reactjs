import { authActions } from "./auth-slice";
import { getTokenLocalStorage } from "../utils/auth";

export const registerAcount = (account) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(account),
    });
    const status = response.status();
    console.log(status);
  } catch (error) {
    console.log(error);
  }
};

export const fetchLoginAccount = (accountLogin) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountLogin),
    });
    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      console.log(token);

      const user_id = data.user.user_id;
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("token", token);
      const account = accountLogin.username;
      localStorage.setItem("account", account);
      dispatch(
        authActions.loginAccount({
          account: account,
          isLogin: true,
        })
      );
    } else {
      throw new Error("Call api Login fail");
    }
  } catch (error) {}
};

export const fetchAccountProfi = (user_id) => async (dispatch) => {
  try {
    console.log(user_id);
    const token = getTokenLocalStorage();
    console.log(token);
    const response = await fetch(
      `http://localhost:3000/api/getUser/?user_id=${user_id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const result = data.data;
      console.log(result);
      dispatch(authActions.profileAccount(result));
    } else {
      throw new Error("Call api fail");
    }
  } catch (error) {
    console.log(error.message);
  }
};
