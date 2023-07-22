import React from "react";

const Account = (props) => {
    const {account} = props;
    console.log(account);

  return (
    <div className="account_username">
        {account}
    </div>
  )
   ;
};

export default Account;
