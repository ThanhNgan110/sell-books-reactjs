import React from "react";
import "../index.css";

import "../assets/css/header.css";
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
                <a href="/" className="nav-link link-black-100 position-relative">
                  <ShoppingBagIcon />
                  <span className="count_item position-absolute bg-dark text-white width-16 height-16 rounded-circle font-size-n9 padding-x padding-y">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
