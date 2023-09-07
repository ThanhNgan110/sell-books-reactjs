import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import "../assets/css/profile.css";
import "../index.css";
import { fetchAccountProfi } from "../store/auth-actions";
import { useDispatch, useSelector } from "react-redux";


const Profile = () => {
  const user_id = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAccountProfi(user_id));
  }, [dispatch, user_id]);
  const accountProfile = useSelector((state) => state.accounts.accountInfor);
  console.log(accountProfile);
  const data =[accountProfile]
  console.log(data)
  const username = data.map((acc) => acc.user_username);
 

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2 col-md-12 col-sm-12">
          <div className="account d-flex">
            <Link to="/">
              <div className="account-avatar pe-3">
                <img className="avatar" src={avatar} alt="avatar" />
              </div>
            </Link>
            <div className="account-info d-flex flex-column align-items-center">
              <div className="account_username ">{username}</div>
              <div className="d-flex align-items-center">
                <Link to="/" className="d-flex ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                        stroke="FFFFFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.91 7.83991L7.72004 13.0299C7.52004 13.2299 7.33004 13.6199 7.29004 13.8999L7.01004 15.8799C6.91004 16.5999 7.41004 17.0999 8.13004 16.9999L10.11 16.7199C10.39 16.6799 10.78 16.4899 10.98 16.2899L16.17 11.0999C17.06 10.2099 17.49 9.16991 16.17 7.84991C14.85 6.51991 13.81 6.93991 12.91 7.83991Z"
                        stroke="#9ca6ad"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.17 8.57983C12.61 10.1498 13.84 11.3898 15.42 11.8298"
                        stroke="#9ca6ad"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-450 font-size-1 ">Sửa Hồ Sơ</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-3  ">
            <div className="">
              <Link
                to="/"
                className="text-dark font-weight-400 d-flex flex-align-items-center "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Tài khoản của tôi
              </Link>
              <ul className="list-unstyled ps-4">
                <li className="p-2">
                  <Link to="../profile" className="text-gray">
                    Hồ Sơ
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/" className="text-gray">
                    Địa chỉ
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/" className="text-gray">
                    Đổi mật khẩu
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex flex-row flex-align-items-center">
              <Link to="/" className="text-dark font-weight-400 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 13H12"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 17H16"
                      stroke="#356091"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Đơn mua
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="wrapper-intro py-4">
            <h5 className="text-center">Thông tin tài khoản</h5>
            <div className="container">
              <div className="form-account">
                <form action="" method="post">
                  <div className="frame-avatar d-flex justify-content-center align-items-center mb-3">
                    <div className="account-frame pe-3 position-relative">
                      <img className="avatar-info" src={avatar} alt="avatar" />
                      <input
                        type="file"
                        className=" form-control form-avatar position-absolute"
                      />
                      <span className="account-edit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3 22H21"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="frame-avatar d-flex justify-content-center align-items-center"></div>
                  <div className="row mb-3 d-flex justify-content-center align-items-center">
                    <label className="col-sm-2 col-form-label">
                      Tên đăng nhập
                    </label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row mb-3 d-flex justify-content-center align-items-center">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row mb-3 d-flex justify-content-center align-items-center">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Telephone
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <fieldset className="row mb-3 d-flex justify-content-center align-items-center">
                    <legend className="col-form-label col-sm-2 pt-0">
                      Giới tính
                    </legend>
                    <div className="col-sm-4 d-flex align-items-center">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label">Nam</label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label className="form-check-label">Nữ</label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label className="form-check-label">Khác</label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <label
                      for="inputBirthday"
                      className="col-sm-2 col-form-label"
                    >
                      Ngày Sinh
                    </label>
                    <div className="d-flex ">
                      <select
                        className="form-select me-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <select
                        className="form-select me-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">Tháng 1</option>
                        <option value="2">Tháng 2</option>
                        <option value="3">Tháng 3</option>
                      </select>
                      <select
                        className="form-select me-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">2002</option>
                        <option value="2">2001</option>
                        <option value="3">2000</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-save px-5">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
