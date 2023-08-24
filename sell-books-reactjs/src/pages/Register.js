import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/register.css";
import "../index.css";
import Error from "../components/Error";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isError, setIsError] = useState({});
  const dateInputRef = useRef();

  const handleInputChange = (e) => {
    let birthdate = dateInputRef.current.value;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
    console.log(formData.gender);
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
    username: formData.username,
    password: formData.password,
    gender: formData.gender,
    fullname: formData.fullname,
    email: formData.email,
    phone: formData.phone,
    birthdate: formData.birthdate,
  };

  const submitRegisterHandler = async (e) => {
    e.preventDefault();
    let isvalid = true;
    const newError = {};
    if (formData.email === undefined) {
      newError.email = "Email không được để trống";
      isvalid = false;
    } else if (!checkValidEmail(formData.email)) {
      newError.email = "Email không đúng định dạng";
      isvalid = false;
    }

    if (formData.fullname === undefined) {
      newError.fullname = "Fullname không được để trống";
      isvalid = false;
    }
    if (formData.phone === undefined) {
      newError.phone = "Telephone không được để trống";
      isvalid = false;
    } else if (formData.phone.trim().length < 10) {
      newError.phone = "Telephone phải có ít nhất 10 chữ số";
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
    if (formData.gender === undefined) {
      newError.gender = "Gender không được để trống";
      isvalid = false;
    }
    if (formData.birthdate === undefined) {
      newError.birthdate = "Birthdate không được để trống";
      isvalid = false;
    }
    if (formData.username === undefined) {
      newError.username = "UserName không được để trống";
      isvalid = false;
    }

    if (!isvalid) {
      setIsError(newError);
    }
    if (isvalid) {
      try {
        console.log(accountRegister);
        const respone = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accountRegister),
        });

        if (!respone.ok) {
          if (formData.username && respone.status !== 200) {
            const errorData = await respone.json();
            console.log("Error", errorData);
            setIsError({ username: "UserName đã đăng ký" });
            return;
          }
        }
        const result = await respone.json();
        alert("succcess");
        console.log("Result", result);
        // dispatch(authActions.registerAccount(result))
        setFormData({});
        console.log(formData);
        navigate("../login");
      } catch (error) {
        console.log("Error", error.message);
      }
    }
  };
  useEffect(() => {}, [isError]);

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
              <form method="post" onSubmit={submitRegisterHandler}>
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
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.email} />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Telephone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <Error onError={isError.phone} />
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
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="birthdate"
                    placeholder="birthdate"
                    value={formData.birthdate}
                    onChange={handleInputChange}
                    ref={dateInputRef}
                  />
                  <Error onError={isError.birthdate} />
                </div>
                <div>
                  <div className="d-flex flex-row mb-3">
                    <div className="me-2">
                      <input
                        type="radio"
                        id="gender_male"
                        name="gender"
                        value="Nữ"
                        onChange={handleInputChange}
                      />
                      <label>Nữ</label>
                    </div>
                    <div className="me-2">
                      <input
                        type="radio"
                        id="gender_female"
                        name="gender"
                        value="Nam"
                        onChange={handleInputChange}
                      />
                      <label>Nam</label>
                    </div>
                    <div className="me-2">
                      <input
                        type="radio"
                        id="gender_diff"
                        name="gender"
                        value="Khác"
                        onChange={handleInputChange}
                      />
                      <label>Khác</label>
                    </div>
                  </div>
                  <Error onError={isError.gender} />
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
