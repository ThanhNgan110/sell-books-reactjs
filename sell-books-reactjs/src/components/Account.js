import React from "react";
import "../index.css";

const Account = (props) => {
    const {account} = props;
    // console.log(account);

  return (
    <div className="account_username black-16">
        {account}
    </div>
  )
   ;
};

export default Account;
