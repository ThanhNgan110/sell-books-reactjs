import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/svg/arrow-right.svg";
import "../assets/css/detailBook.css";
import add from "../assets/svg/add.svg";
import minus from "../assets/svg/minus.svg";
import "../index.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import img from "../assets/img.jpg";
import img1 from "../assets/img3.jpg";
import img2 from "../assets/img4.jpg";
import advertise from "../assets/advertise.png";

const DetailBookItem = (props) => {
  const { id, title, image, price, content, author } = props.items;
  // console.log(id);
  const dispatch = useDispatch();

  const [isCount, setIsCount] = useState(1);

  const addHandler = () => {
    setIsCount((preCount) => preCount + 1);
    // console.log(isCount);
  };

  const minusHandler = () => {
    setIsCount((preCount) => preCount - 1);
    // console.log(isCount);
  };

  const addCartHandler = () => {
    dispatch(
      cartActions.insertProductFromCart({
        id: id,
        title: title,
        content: content,
        author: author,
        image: image,
        quantity: isCount,
        price: price,
      })
    );
  };

  const disabled = isCount === 1 && "disabled";
  return (
    <main>
      <div className="bg-punch-light">
        <div className="container">
          <section className="section-detailBook">
            <div className="d-flex justify-content-between align-items-center">
              <nav>
                <Link className="link-black-100" to="/">
                  Home
                </Link>
                <span>
                  <img src={arrow} alt="My Happy SVG" />
                </span>
                <Link className="link-black-100" to="/">
                  Product
                </Link>
                <span>
                  <img src={arrow} alt="My Happy SVG" />
                </span>
                <span>{title}</span>
              </nav>
            </div>
            <div className="product p-3">
              <div className="row bg-white border p-3">
                <div className="col-lg-6 col-sm-12 text-center border-right pb-3">
                  <div className="row d-flex flex-column">
                    <div className="col">
                      <img
                        className="img-fluid img-choose "
                        src={image}
                        alt="img"
                        style={{ width: "350px", height: "auto" }}
                      />
                    </div>
                    <div className="mt-2 list_image d-flex">
                      <div className="px-2">
                        <img
                          src={img}
                          alt="img"
                          style={{ width: "70px", height: "auto" }}
                        />
                      </div>
                      <div className="px-2">
                        <img
                          src={img1}
                          alt="img1"
                          style={{ width: "70px", height: "auto" }}
                        />
                      </div>
                      <div className="px-2">
                        <img
                          src={img2}
                          alt="img2"
                          style={{ width: "70px", height: "auto" }}
                        />
                      </div>
                      <div className="px-2">
                        <img
                          src={img1}
                          alt="img1"
                          style={{ width: "70px", height: "auto" }}
                        />
                      </div>
                      <div className="px-2">
                        <img
                          src={img1}
                          alt="img1"
                          style={{ width: "70px", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="row d-flex flex-column">
                    <div className="col">
                      <div className="book-intro">
                        <div>
                          <h1 className="product_title font-size-26">
                            {title}
                          </h1>
                          <div className="font-size-2 mb-4 d-flex align-items-center">
                            <span className="text-yellow-darker">
                              <span className="fas fa-star"></span>
                              <span className="fas fa-star"></span>
                              <span className="fas fa-star"></span>
                              <span className="fas fa-star"></span>
                              <span className="fas fa-star"></span>
                            </span>
                            <span className="ml-3">(3,714)</span>
                           
                          </div>
                        </div>
                        <div>
                        <span className="ml-3 font-weight-medium me-2">
                              Tác giả
                            </span>
                            <span className="ml-2 text-gray-600">{author}</span>
                        </div>
                        <p className="product-price font-size-22 font-weight-medium mb-4">
                          {price}
                          <span className="ps-1">đ</span>
                        </p>
                        <p className="label font-weight-medium">Số Lượng</p>
                        <div className="d-flex align-items-center mb-4">
                          <div className="border px-2 py-1 width-120">
                            <div className="js-quantity">
                              <div className="d-flex align-items-center">
                                <button
                                  className="js-minus text-dark"
                                  onClick={minusHandler}
                                  style={{ border: "none", background: "none" }}
                                  disabled={disabled}
                                >
                                  <img src={minus} alt="minus" />
                                </button>
                                <input
                                  className="border-0 text-center form-control"
                                  type="text"
                                  id="quantity"
                                  name="quantity"
                                  min="1"
                                  max="100"
                                  value={isCount}
                                  style={{ padding: "6px 1px" }}
                                />
                                <button
                                  className="js-plus text-dark"
                                  onClick={addHandler}
                                  style={{ border: "none", background: "none" }}
                                >
                                  <img src={add} alt="add" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <button
                        onClick={addCartHandler}
                        className="border-0 btn-dark p-3 btn-lock"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="mt-2">
                      <img src={advertise} alt="advertise" style={{width:"500px", height:"auto"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="tabs wc-tabs-wrapper container">
        <ul
          className="nav nav-tabs d-flex justify-content-center py-3 border-bottom"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link border-0 nav-link font-weight-medium"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Thông tin
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link border-0 nav-link font-weight-medium"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Đánh giá
            </button>
          </li>
        </ul>

        <div className="tab-content px-5 mt-4">
          <div
            className="tab-pane active"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p>{content}</p>
          </div>
          <div
            className="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <p>Chưa có đánh giá nào</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailBookItem;
