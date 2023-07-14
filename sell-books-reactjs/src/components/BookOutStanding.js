import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import img from "../assets/img.jpg";
import img1 from "../assets/img3.jpg";
import img2 from "../assets/img4.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img5.jpg";
import "../assets/css/bookOutStanding.css";


const BookOutStanding = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow /> ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        dots: true,
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  const featureBook = [
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

  const renderBookFeature = featureBook.map((book) => (
    <div className="card" key={book.id}>
      <div className="p-3">
        <div className="product-book mb-3 ">
          <Link to="">
            <img className="mx-auto" src={book.src} alt="" />
          </Link>
        </div>
        <div className="card-body">
          <h6 className="card-title">{book.title}</h6>
          <h6 className="text-gray-700">{book.author}</h6>
          {/* <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6> */}
          <div className="d-flex align-items-center">
            <span>$</span>
            <span className="card-text font-size-3 font-weight-medium mt-0">
              {book.price}
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <button className="product_add-to-cart text-dark text-dark font-weight-medium "> Add to cart
               {/* <span className="product_add-to-cart text-dark text-dark font-weight-medium ">Add to cart</span> */}
            </button>
           
            <span className="d-flex flex-row justify-content-center align-items-center btn-outline-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <path
                  d="M3.45067 10.9082L10.4033 17.4395C10.6428 17.6644 10.7625 17.7769 10.9037 17.8046C10.9673 17.8171 11.0327 17.8171 11.0963 17.8046C11.2375 17.7769 11.3572 17.6644 11.5967 17.4395L18.5493 10.9082C20.5055 9.07059 20.743 6.0466 19.0978 3.92607L18.7885 3.52734C16.8203 0.99058 12.8696 1.41601 11.4867 4.31365C11.2913 4.72296 10.7087 4.72296 10.5133 4.31365C9.13037 1.41601 5.17972 0.990584 3.21154 3.52735L2.90219 3.92607C1.25695 6.0466 1.4945 9.07059 3.45067 10.9082Z"
                  stroke="#33363F"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <section className="section-outstanding">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="font-size-26">SÁCH NỔI BẬT</h2>
          <Link
            to=""
            className="d-flex justify-content-between align-items-center h-primary"
          >
            Xem Tất Cả
            <span className="ps-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path d="M1 1L7 7L1 13" stroke="#222222" />
              </svg>
            </span>
          </Link>
        </div>

        <Slider {...settings}>{renderBookFeature}</Slider>
      </section>
    </div>
  );
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,   display: "block",
        width: "2.813rem",
        height: "2.813rem",
        cursor: "pointer",
        transition: ".3s",
        border: "1px solid #eae8e4",
        position: "absolute" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  width: "2.813rem",
      height: "2.813rem",
      cursor: "pointer",
      transition: ".3s",
      zIndex:"1",
      border: "1px solid #eae8e4",
      position: "absolute",
     }}
      onClick={onClick}
    />
  );
}
export default BookOutStanding;
