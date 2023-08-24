import { authActions } from "./auth-slice";

export const registerAcount = (account) => async dispatch =>{
    try {
        const response = await fetch("http://localhost:3000/api/register",{
            method:"POST",
            body:JSON.stringify(account)
        })
        const status = response.status();
        console.log(status);

        
    } catch (error) { 
        console.log(error);
    }

};

export const fetchLoginAccount = (accountLogin) => async dispatch => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(accountLogin)
            }
          )
          if(response.ok){
            const data = await response.json();
          const token = data.token;
          //   console.log(token);
          // save token localStorage
          localStorage.setItem("token", token);
          const account = accountLogin.username;
          console.log(account);
          localStorage.setItem("account", account);
          dispatch(authActions.loginAccount({
            account: account,
            isLogin: true
          }))
          }
          else{
            throw new Error("Call api Login fail");
          }
          
    } catch (error) {
        
    }
}
