import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../assets/category/icon-khoa-hoc.png";
import icon2 from "../assets/category/icon-tieu-thuyet.png";
import icon3 from "../assets/category/icon-kinh-te.png";
import icon4 from "../assets/category/icon-ky-nang-song.png";
import icon5 from "../assets/category/icon-ngon-tinh.png";
import icon6 from "../assets/category/icon-hoi-hoa.png";
import icon7 from "../assets/category/icon-am-nhac.png";
import icon8 from "../assets/category/icon-thieu-nhi.png";
import "../assets/css/category.css";
import "../index.css";
import "../assets/css/category.css";

const Categories = () => {
  const category = [
    { id: 1, src: icon1, title: "Sách khoa học" },
    { id: 2, src: icon2, title: "Sách tiểu thuyết" },
    { id: 3, src: icon3, title: "Sách kinh tế" },
    { id: 4, src: icon4, title: "Sách kỹ năng sống" },
    { id: 5, src: icon5, title: "Sách ngôn tình" },
    { id: 6, src: icon6, title: "Sách hội họa" },
    { id: 7, src: icon7, title: "Sách âm nhạc" },
    { id: 8, src: icon8, title: "Sách truyền kỳ" },
  ];

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow /> ,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots:true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const getIcons = category.map((icon) => (
    <div key={icon.id}>
      <Link to="">
        <img src={icon.src} alt={icon.alt} />
        <h6 className="title-frame bs-gray-dark">{icon.title}</h6>
      </Link>
    </div>
  ));

  return (
    <>
      <section className="section-categories my-4">
        <div className="container">
          <div className="section-top ">
            <h2 className="text-title">DANH MỤC</h2>
          </div>
          <div className="section-bottom bg-gray-200 rounded-md">
             <Slider {...settings}>{getIcons}</Slider>
          </div>
        
        </div>
      </section>
    </>
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

export default Categories;
