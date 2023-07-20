import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/register.css";
import "../index.css";
import Error from "../components/Error";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [isError, setIsError] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // request password lenght 9-10 charact, [0-9], [a-z], [A-Z], and not whitespace

  const checkValidPassword = (value) => {
    let regex =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{9,10}$/;
    const check = regex.test(value);
    return check;
  };
  // check isvalid email
  const checkValidEmail = (value) => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const check = emailFormat.test(value);
    return check;
  };

  const accountRegister = {
    user_username: formData.username,
    user_password: formData.password,
    user_full_name: formData.fullname,
    user_telephone: formData.telephone,
  };

  const submitRegisterHandler = async (e) => {
    e.preventDefault();
    // alert("hhhi");
    let isvalid = true;
    const newError = {};
    if (formData.username === undefined) {
      newError.username = "Email không được để trống";
      isvalid = false;
    } else if (!checkValidEmail(formData.username)) {
      newError.username = "Email không đúng định dạng";
      isvalid = false;
    }

    if (formData.fullname === undefined) {
      newError.fullname = "Fullname không được để trống";
      isvalid = false;
    }
    if (formData.telephone === undefined) {
      newError.telephone = "Telephone không được để trống";
      isvalid = false;
    } else if (formData.telephone.trim().length < 10) {
      newError.telephone = "Telephone phải có ít nhất 10 chữ số";
      isvalid = false;
    }
    if (formData.password === undefined) {
      newError.password = "Password không được để trống";
      isvalid = false;
    } else if (!checkValidPassword(formData.password)) {
      newError.password =
        "Password không đúng định dạng (9-10 ký tự, có chứa chữ in hoa, in thường, ký tự đặc biệt và không có whitespace)";
      isvalid = false;
    }

    if (!isvalid) {
      setIsError(newError);
    }
    if (isvalid) {
      try {
        console.log(accountRegister);
        const respone = await fetch(
          "https://sale-books-reactjs-default-rtdb.firebaseio.com/account.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(accountRegister),
          }
        );

        // console.log(respone.status);
        // console.log(respone.json);
        if (!respone.ok) {
          if (formData.username && respone.status === 500) {
            const errorData = await respone.json();
            console.log("Error", errorData);
            setIsError({ username: "Email không tồn tại" });
            return;
          }
          if (formData.username && respone.status === 400) {
            const errorData = await respone.json();
            console.log("Error", errorData);
            setIsError({ username: "Email đã được đăng ký" });
            return;
          }
          if (formData.telephone && respone.status === 400) {
            const errorData = await respone.json();
            console.log("Error", errorData);
            setIsError({ telephone: "Telephone đã được đăng ký" });
            return;
          }
        }
        const result = await respone.json();
        alert("succcess");
        console.log("Result", result);
        setFormData({});
        console.log(formData);
        navigate("../login");
      } catch (error) {
        console.log("Error", error.message);
      }
    }
  };
  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12 col-sx-12 mx-auto">
            <div className="page-register">
              <h1 className="text-center fs-3">Register</h1>
              <div className="text-center mb-3">
                Đã có tài khoản đăng nhập,
                <Link className="btn-link-style" to="../login">
                  tại đây
                </Link>
              </div>
              <form
                action="http://34.29.205.142:85/api/create-user"
                method="post"
                onSubmit={submitRegisterHandler}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    placeholder="FullName"
                    value={formData.fullname}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.fullname} />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="UserName"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.username} />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="telephone"
                    placeholder="Telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.telephone} />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.password} />
                </div>
                <div className="btn-register">
                  <button type="submit" className="btn btn-block btn-dark">
                    Register
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

export default Register;
