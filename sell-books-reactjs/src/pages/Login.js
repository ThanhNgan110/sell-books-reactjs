import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";
import Error from "../components/Error";

const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({});
  const [isError, setIsError] = useState({});
  const [status, setStatus] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // set status password when click
  const handlePasswordToggle = ()=> {
    console.log('status');
    alert('status');
    setStatus(prevState => !prevState);

  }


  let isDisplayPass = !status ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>;


  const accountLogin = {
    user_userName: formData.userName,
    user_password: formData.password,
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    let isValid = true;
    const newError = {};
    if (!formData.userName) {
      newError.userName = "UserName không được để trống";
      isValid = false;
    }
    if (!formData.password) {
      newError.password = "Password không được để trống";
      isValid = false;
    }
    if (!isValid) {
      setIsError(newError);
    }
    if (isValid) {
      fetch("http://34.29.205.142:85/api/get-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accountLogin),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          alert("succcess");
          console.log(data);
          setFormData({});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12 col-sx-12 mx-auto">
            <div className="page-register">
              <h1 className="text-center fs-3">Login</h1>
              <div className="text-center mb-3">
                Nếu bạn chưa có tài khoản,đăng ký
                <Link className="btn-link-style" to="../register">
                  tại đây
                </Link>
              </div>
              <form
                action="http://34.29.205.142:85/api/get-user"
                method="POST"
                onSubmit={submitLoginHandler}
              >
                <div className="mb-3">
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    value={formData.userName}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.userName} />
                </div>
                <div className="mb-3 position-relative">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  
                  />
                  <Error onError={isError.password} />
                  <span className="show-password" onClick={handlePasswordToggle}>
                   {isDisplayPass}
                  </span>
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="form-login_remember d-flex">
                    <input type="checkbox" />
                    <label htmlFor="">Remember me</label>
                  </div>
                  <Link
                    className="nav-link link-black-100"
                    to="../forgotPassword"
                  >
                    <u>Forgot Password?</u>
                  </Link>
                </div>
                <div className="btn-login">
                  <button type="submit" className="btn btn-block btn-dark">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
