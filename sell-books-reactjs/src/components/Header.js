import React from "react";
import {Link} from  'react-router-dom'
import "../index.css";
import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="">
      <div className="header-top border-bottom">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="nav list-unstyled">
              <li className="nav-item">
                <Link to='/' className="nav-link link-black-100">
                  Chào mừng bạn đến với thế giới BOOK
                </Link>
              </li>
            </ul>
            <ul className="nav list-unstyled">            
              <li className="nav-item dropdown">
                <Link
                  className="nav-link link-black-100 dropdown-toggle px-3 font-weight-medium"
                  to ="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person glph-icon"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="account/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="account/register">
                     Register
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item link-black-100 ">
                <Link
                  to="/"
                  className="nav-link link-black-100 position-relative"
                >
                  <i class="bi bi-bag glph-icon"></i>
                  <span className="count_item position-absolute bg-dark text-white width-16 height-16 rounded-circle font-size-n9 padding-x padding-y">
                    0
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo.png" width="150" height="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                BOOKS
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="">
                <ul className="nav list-unstyled d-flex flex-column">
                  <li className="nav-item border-bottom my-3 ">
                    <Link
                      to="/"
                      className="nav-link link-black-100 font-weight-medium"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item link-black-100 border-bottom my-3 font-weight-medium">
                    <Link to="/" className="nav-link link-black-100">
                      Category
                    </Link>
                  </li>
                  <li className="nav-item link-black-100 border-bottom my-3 font-weight-medium">
                    <Link to="/" className="nav-link link-black-100">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item link-black-100 border-bottom my-3 font-weight-medium">
                    <Link to="/" className="nav-link link-black-100">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item border-bottom my-3 ">
                    <Link
                      to="/"
                      className="nav-link link-black-100 font-weight-medium"
                    >
                      <i class="bi bi-person glph-icon"></i>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item border-bottom ">
                  <Link
                      to="/"
                      className="nav-link link-black-100 font-weight-medium"
                    >
                     <i class="bi bi-person-plus glph-icon"></i>
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link link-black-100 px-3 font-weight-medium fs-5 text"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link link-black-100 dropdown-toggle px-3 font-weight-medium fs-5 text"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link link-black-100 px-3 font-weight-medium fs-5 text"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link link-black-100 px-3 font-weight-medium fs-5 text"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="site-search w-25 position-relative">
              <form className="form-inline">
                <div className="input-group">
                  <input
                    className="form-control bg-white-100 "
                    type="search"
                    placeholder="Search for Books ..."
                    aria-label="Search"
                  />
                  <div className="input-group-btn">
                    <button className="btn icon-fallback-text">
                      <i class="bi bi-search glph-icon"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
