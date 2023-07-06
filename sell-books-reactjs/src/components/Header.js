import React from "react";
import logo from "../assets/logo/logo.png";
import "../assets/css/header.css";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="header-top">
          <div className="border-bottom d-flex justify-content-between">
            <ul className="col-6 list-unstyled d-flex justify-content-start ms-3">
              <li className="wellcom_text">
                Chào mừng bạn đến với thế giới ZBOOK
              </li>
            </ul>

            {/* <ul className="col-5 list-unstyled d-flex justify-content-end me-3">
              <li className="pe-2">Thẻ quà tặng</li>
              <li className="pe-2">Trợ giúp</li>
            </ul> */}
          </div>
        </div>
        <div className="header-bottom ">
          <div className="border-bottom d-flex justify-content-between align-items-center">
            <div className="col-3 list-unstyled d-flex justify-content-start ms-3">
              <a href="/">
                <img src={logo} alt="logo" width="300" />
              </a>
            </div>

            <ul class="col-3 list-unstyled d-flex justify-content-end me-3">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle account_"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tài khoản
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/">
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Đăng ký
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link cart_" href="/">
                  Giỏ hàng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="logo" width="250" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex mx-auto">
                <input
                  type="search"
                  class="form-control w-100"
                  aria-label="Search"
                  placeholder="Tìm kiếm"
                />
                <button
                  class="btn btn-success"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </form>
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tài khoản
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/">
                        Đăng nhập{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Đăng ký
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Giỏ hàng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </div>
    </>
  );
};

export default Header;
