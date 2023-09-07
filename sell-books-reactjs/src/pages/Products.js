import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/svg/arrow-right.svg";
import Add from "../assets/svg/Add_round_light.svg";
import "../assets/css/products.css";
import element from "../assets/svg/element-3.svg";
import vertical from "../assets/svg/row-vertical.svg";
import "../index.css";
import "../assets/css/bookOutStanding.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import img from "../assets/img.jpg";
import {useDispatch, useSelector} from "react-redux";
import { fetchAllProduct } from "../store/product-actions";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchAllProduct())
}, [dispatch])
  
 
  const getAllProduct = useSelector((state)=> state.products.products);
  console.log(getAllProduct)
  // let covertArray = Object.values(getAllProduct);
  // console.log(covertArray );


  
  return (
    <main>
      <div className="bg-punch-light">
        <div className="container">
          <section className="section-product">
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
              </nav>
            </div>
            <div className="row my-4">
              <div className="col-2 ">
                <div className="border p-3  bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                  <h5>Categories</h5>
                  <span className="ms-2">
                    <img src={Add} alt="My Happy SVG" />
                  </span>
                </div>
                <ul className="p-0 list-unstyled">
                  <li>
                    <Link className="black">Tất cả</Link>
                  </li>
                  <li>
                    <Link className="black">Sách khoa học</Link>
                  </li>
                  <li>
                    <Link className="black">Sách tiểu thuyết</Link>
                  </li>
                  <li>
                    <Link className="black">Sách kinh tế</Link>
                  </li>
                  <li>
                    <Link className="black">Sách kỹ năng sống</Link>
                  </li>
                  <li>
                    <Link className="black">Sách ngôn tình</Link>
                  </li>
                  <li>
                    <Link className="black">Sách hội họa</Link>
                  </li>
                  <li>
                    <Link className="black">Sách âm nhạc</Link>
                  </li>
                  <li>
                    <Link className="black">Sách truyền kì</Link>
                  </li>
                </ul>
                </div>
                

                
              </div>
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="product-control__left">
                    <ul className="list-unstyled d-flex">
                      <li className="">
                        <button className="border">
                          <img src={element} alt="element.svg" />
                        </button>
                      </li>
                      <li className="ps-2">
                        <button className="border">
                          <img src={vertical} alt="vertical.svg" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-control__right">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="/">
                            Giá giảm dần
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Giá tăng dần
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-list">
                  <ul className="row p-0 list-unstyled">
                   {
                    Object.values(getAllProduct).map((product)=>(
                      
                       <li className="col-3 mb-2">
                    <div className="card">
                <div className="p-3">
                  <div className="product-book mb-3 text-center">
                    <Link to="">
                      <img className="mx-auto" src={img} alt="" style={{width:"200px", height:"auto"}} />
                    </Link>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title">{product.book_title
}</h6>
                    <h6 className="text-gray-700">{product.book_author}</h6>
                
                    <div className="d-flex align-items-center">
                     
                      <span className="card-text font-size-3 font-weight-medium mt-0">
                      {product.book_price}
                      </span>
                       <span>đ</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                    
                      <Tooltip title="ADD TO CART" placement="right-start">
                        <IconButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
                              stroke="#222222"
                              stroke-linecap="round"
                            />
                            <path
                              d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                              stroke="#222222"
                            />
                          </svg>
                        </IconButton>
                      </Tooltip>
          
                      <span className="d-flex flex-row justify-content-center align-items-center btn-outline-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                            stroke="#222222"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                    </li>
                      ))
                   
                   }
                   
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Products;
