import React from "react";
import arrow from "../assets/svg/arrow-right.svg";
import img from "../assets/img.jpg";
import "../assets/css/detailBook.css";
import add from "../assets/svg/add.svg";
import minus from "../assets/svg/minus.svg";
import "../index.css";

const DetailBook = () => {
  return (
    <div className="bg-punch-light">
      <div className="container">
        <section className="section-detailBook">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Book Detail</h5>
            <nav>
              <a className="link-black-100" href="/">Home</a>
              <span>
                <img src={arrow} alt="My Happy SVG" />
              </span>
              <a className="link-black-100" href="/">Product</a>
              <span>
                <img src={arrow} alt="My Happy SVG" />
              </span>
              <a className="link-black-100" href="/">DetailBook</a>
            </nav>
          </div>
          <div className="product  pt-5">
            <div className="row">
              <div className="col-lg-4 col-sm-12 text-center">
                <img className="img-fluid " src={img} alt="img" />
              </div>
              <div className="col-lg-6 col-sm-12 bg-white border p-3">
                <div className="book-intro">
                  <div>
                    <h1 className="product_title font-size-26">Where the Crawdads Sing</h1>
                    <div class="font-size-2 mb-4 d-flex align-items-center">
                      {/* <span class="text-yellow-darker">
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                      </span> */}
                      {/* <span class="ml-3">(3,714)</span> */}
                      <span class="ml-3 font-weight-medium me-2">Tác giả</span>
                      <span class="ml-2 text-gray-600">Anna Banks</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed exercitation ullamco laboris nisi ut aliquip exea
                    </p>
                  </div>
                  <p className="price font-size-22 font-weight-medium mb-4">71.000
                  <span>đ</span>
                  </p>
                  <div className="d-flex align-items-center">
                    <div class="border px-2 py-1 width-120">
                      <div class="js-quantity">
                        <div class="d-flex align-items-center">
                          <label class="screen-reader-text sr-only">
                            Quantity
                          </label>
                          <a class="js-minus text-dark" href="/">
                            <img src={minus} alt="minus" />
                          </a>
                          <input
                            className="border-0 text-center form-control"
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="100"
                          />
                          <a class="js-plus text-dark" href="/">
                            <img src={add} alt="add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="border-0 btn-dark p-3 btn-lock ms-3"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailBook;
