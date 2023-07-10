import React from "react";
import fram1 from "../assets/icons/icon-khung-gio-sale.png";
import fram2 from "../assets/icons/icon-phieu-giam-gia.png";
import fram3 from "../assets/icons/icon-sach-ban-chay.png";
import fram4 from "../assets/icons/icon-sach-gia-re.png";
import fram5 from "../assets/icons/icon-sach-noi-bat.png";
import fram6 from "../assets/icons/icon-co-the-ban-se-thich.png";
import fram7 from "../assets/icons/icon-sach-free.png";
import fram8 from "../assets/icons/icon-sach-tinh-phi.png";
import fram9 from "../assets/icons/icon-sach-gia-re.png";

const Notification = () => {
  return (
    <>
      <div className="container my-3">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="row">
                  <div className="col">
                    <img
                      src={fram1}
                      className="d-block img-fluid"
                      alt="fram-1"
                    />
                  </div>
                  <div className="col">
                    <img
                      src={fram2}
                      className="d-block img-fluid"
                      alt="fram-2"
                    />
                  </div>
                  <div className="col">
                    <img
                      src={fram3}
                      className="d-block img-fluid"
                      alt="fram-3"
                    />
                  </div>
                  <div className="col">
                    <img
                      src={fram4}
                      className="d-block img-fluid"
                      alt="fram-4"
                    />
                  </div>
                  <div className="col">
                    <img
                      src={fram5}
                      className="d-block img-fluid"
                      alt="fram-5"
                    />
                  </div>
                  <div className="col">
                    <img
                      src={fram6}
                      className="d-block img-fluid"
                      alt="fram-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={fram7} className="d-block img-fluid" alt="fram-7" />
                </div>
                <div className="col">
                  <img src={fram8} className="d-block img-fluid" alt="fram-8" />
                </div>
                <div className="col">
                  <img src={fram9} className="d-block img-fluid" alt="fram-9" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Notification;
