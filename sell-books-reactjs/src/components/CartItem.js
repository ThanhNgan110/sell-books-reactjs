import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";
import img from "../assets/img.jpg";
import img1 from "../assets/img3.jpg";
import img2 from "../assets/img4.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img5.jpg";
import add from "../assets/svg/add.svg";
import remove from "../assets/svg/Trash.svg";
import minus from "../assets/svg/minus.svg";
import "../assets/css/cartItem.css";

const CartItem = () => {
  const cartItem = [
    {
      id: 1,
      title: "Blindside (Michael Bennett)",
      src: img,
      author: "Jay Shetty",
      price: "29",
    },
    {
      id: 2,
      title: "The Overdue Life of Amy Byler",
      src: img1,
      author: "Jay Shetty",
      price: "29",
    },
    {
      id: 3,
      title: "Man's Search for Meaning",
      src: img2,
      author: "Jay Shetty",
      price: "29",
    },
    {
      id: 4,
      title: "Camino Windss",
      src: img3,
      author: "Jay Shetty",
      price: "29",
    },
    {
      id: 5,
      title: "Call Me By Your Name",
      src: img4,
      author: "Jay Shetty",
      price: "29",
    },
    {
      id: 6,
      title: "Camino Windss",
      src: img,
      author: "Jay Shetty",
      price: "29",
    },
  ];
  return (
    <div className="table-responsive">
    <table className="table  table_shop">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItem.map((items) => (
          <tr>
            <td className="align-middle">
              <div className="d-flex align-items-center">
                <Link to="">
                  <img
                    src={items.src}
                    alt=""
                    style={{ width: "100px", height: "auto" }}
                  />
                </Link>
                <div className="ms-3 ">
                  <Link
                    to=""
                    className="font-weight-medium black-16"
                  >
                    {items.title}
                  </Link>
                </div>
              </div>
            </td>
            <td className="align-middle">
              <span className="amount amount">
                <span className="woocommerce-Price-currencySymbol">
                  £
                </span>
                {items.price}
              </span>
            </td>
            <td className="align-middle">
              <div className="d-flex align-items-center">
                <div className="border px-2 py-1 width-120">
                  <div className="js-quantity">
                    <div className="d-flex align-items-center">
                      <a
                        className="js-minus text-dark"
                        href="/"
                      >
                        <img src={minus} alt="minus" />
                      </a>
                      <input
                        className="border-0 text-center form-control"
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="100"
                        value="1"
                      />
                      <a className="js-plus text-dark" href="/">
                        <img src={add} alt="add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="align-middle">
              <span className="amount amount">
                <span className="woocommerce-Price-currencySymbol">
                  £
                </span>
                {items.price}
              </span>
            </td>
            <td className="align-middle">
              <Link to="">
                <img src={remove} alt="product-remove" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default CartItem