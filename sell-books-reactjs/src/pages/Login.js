import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import Error from "../components/Error";
import { useDispatch } from "react-redux";
import { fetchLoginAccount } from "../store/auth-actions";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [isError, setIsError] = useState({});
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // set status password when click
  const handlePasswordToggle = () => {
    // set status depencies previousState
    setStatus((prevState) => !prevState);
  };

  let isDisplayPass = !status ? (
    <i className="bi bi-eye-slash"></i>
  ) : (
    <i className="bi bi-eye"></i>
  );

  const accountLogin = {
    username: formData.username,
    password: formData.password,
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newError = {};
    if (formData.username === undefined) {
      newError.username = "UserName không được để trống";
      isValid = false;
    }
    if (formData.password === undefined) {
      newError.password = "Password không được để trống";
      isValid = false;
    }
    if (!isValid) {
      setIsError(newError);
    }
    if (isValid) {
      dispatch(fetchLoginAccount(accountLogin));
      navigate("/");
      //  try {
      //   const response = await fetch(
      //     "http://localhost:3000/api/login",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(accountLogin)
      //     }
      //   )
      //   const data = await response.json();
      //   const token = data.token;
      //   console.log(token);
      //   // save token localStorage
      //   localStorage.setItem("token", token);

      //  } catch (error) {
      //   console.log(error.message);
      //  }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-8 col-sm-12 col-sx-12 mx-auto">
            <div className="page-register">
              <h1 className="text-center fs-3">Login</h1>
              <div className="text-center mb-3">
                Nếu bạn chưa có tài khoản,đăng ký
                <Link className="btn-link-style" to="../register">
                  tại đây
                </Link>
              </div>
              <form method="POST" onSubmit={submitLoginHandler}>
                <div className="mb-3">
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.username} />
                </div>
                <div className="mb-3 position-relative">
                  <input
                    name="password"
                    type={!status ? "password" : "text"}
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.password} />
                  <span
                    className="show-password"
                    onClick={handlePasswordToggle}
                  >
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
