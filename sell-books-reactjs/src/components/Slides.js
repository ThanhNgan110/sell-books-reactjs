import React from "react";
import slide1 from "../assets/slides/slides-1.png";
import slide2 from "../assets/slides/slides-2.png";
import "../assets/css/slides.css";

const Slides = () => {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ul className="carousel-indicators pagination">
            <li
              className="active slick-current"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            >
              <span></span>
            </li>
            <li
              className="slick-current"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <span></span>
            </li>
            <li
              className="slick-current"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <span></span>
            </li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="slides-2.png" />
            </div>
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="slides-1.png" />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="slides-2.png" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slides;
