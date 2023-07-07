import React from "react";
import "../index.css";

import "../assets/css/header.css";
import logo from "../assets/logo/logo.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <header>
      <div className="header-top border-bottom">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="nav list-unstyled">
              <li className="nav-item">
                <a href="/" className="nav-link link-black-100">
                  Chào mừng bạn đến với thế giới BOOK
                </a>
              </li>
            </ul>
            <ul className="nav list-unstyled">
              <li className="nav-item ">
                <a href="/" className="nav-link link-black-100">
                  <PersonIcon />
                </a>
              </li>
              <li className="nav-item link-black-100 ">
                <a
                  href="/"
                  className="nav-link link-black-100 position-relative"
                >
                  <ShoppingBagIcon />
                  <span className="count_item position-absolute bg-dark text-white width-16 height-16 rounded-circle font-size-n9 padding-x padding-y">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo.png" width="150" height="100" />
          </a>
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
                    <a href="/" className="nav-link link-black-100">
                      Home
                    </a>
                  </li>
                  <li className="nav-item link-black-100 border-bottom my-3 ">
                    <a
                      href="/"
                      className="nav-link link-black-100"
                    >
                      Category
                    </a>
                  </li>
                  <li className="nav-item link-black-100 border-bottom my-3 ">
                    <a
                      href="/"
                      className="nav-link link-black-100"
                    >
                      Products
                    </a>
                  </li>
                  <li className="nav-item link-black-100 border-bottom my-3 ">
                    <a
                      href="/"
                      className="nav-link link-black-100"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-item border-bottom my-3 ">
                    <a href="/" className="nav-link link-black-100">
                      Login
                    </a>
                  </li>
                  <li className="nav-item border-bottom ">
                    <a href="/" className="nav-link link-black-100">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a href="/" className="nav-link link-black-100 px-3">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link link-black-100 dropdown-toggle px-3"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <a href="/" className="nav-link link-black-100 px-3">
                  Products
                </a>
              </li>
              <li className="nav-item ">
                <a href="/" className="nav-link link-black-100 px-3">
                  Contact
                </a>
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
                      <i className="fa-solid fa-magnifying-glass"></i>
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
