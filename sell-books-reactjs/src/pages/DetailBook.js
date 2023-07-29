import React,{useEffect} from "react";
import {useParams, Link} from "react-router-dom";

import arrow from "../assets/svg/arrow-right.svg";
import "../assets/css/detailBook.css";
import add from "../assets/svg/add.svg";
import minus from "../assets/svg/minus.svg";
import "../index.css";
import { fetchProductById } from "../store/product-actions";
import {useDispatch, useSelector} from "react-redux";


const DetailBook = () => {
  const {product_id} = useParams();
  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(fetchProductById(product_id));
  },[dispatch, product_id]);
  

  const productById = useSelector((state) => state.products.single_product);

  let convertArray = Object.values(productById);
  return (
    convertArray.map((item) => (
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
                 <span>{item.title}</span>
              </nav>
            </div>
            <div className="product p-3">
              <div className="row bg-white border p-3">
                <div className="col-lg-6 col-sm-12 text-center border-right pb-3">
                  <div className="row d-flex flex-column">
                    <div className="col">
                    <img className="img-fluid img-choose " src={item.image} alt="img" style={{width:"400px", height:"auto"}}/>
                    </div>    
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="book-intro">
                    <div>
                      <h1 className="product_title font-size-26">
                        {item.title}
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
                        <span className="ml-3 font-weight-medium me-2">
                          Tác giả
                        </span>
                        <span className="ml-2 text-gray-600">{item.author}</span>
                      </div>
                     
                    </div>
                    <p className="price font-size-22 font-weight-medium mb-4">
                     {item.price}
                      <span>đ</span>
                    </p>
                    <p className="label font-weight-medium">
                             Số Lượng
                            </p>
                    
                    <div className="d-flex align-items-center mb-4">
                      <div className="border px-2 py-1 width-120">
                        
                        <div className="js-quantity">
                          
                          <div className="d-flex align-items-center">
                            
                            <a className="js-minus text-dark" href="/">
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
                    
                  </div>
                  <button
                        type="submit"
                        className="border-0 btn-dark p-3 btn-lock"
                      >
                        Add to cart
                      </button>
                </div>
              
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="tabs wc-tabs-wrapper container">
        <ul className="nav nav-tabs d-flex justify-content-center py-3 border-bottom" id="myTab" role="tablist">
        
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
           <p>
             {item.content}
            </p>
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

    ))
   
  );
};

export default DetailBook;
