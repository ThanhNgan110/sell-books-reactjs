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
      <div className="container">
        <div id="slideshow" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="row">
                  <div class="col">
                    <img
                      src={fram1}
                      className="d-block img-fluid"
                      alt="fram-1"
                    />
                  </div>
                  <div class="col">
                    <img
                      src={fram2}
                      className="d-block img-fluid"
                      alt="fram-2"
                    />
                  </div>
                  <div class="col">
                    <img
                      src={fram3}
                      className="d-block img-fluid"
                      alt="fram-3"
                    />
                  </div>
                  <div class="col">
                    <img
                      src={fram4}
                      className="d-block img-fluid"
                      alt="fram-4"
                    />
                  </div>
                  <div class="col">
                    <img
                      src={fram5}
                      className="d-block img-fluid"
                      alt="fram-5"
                    />
                  </div>
                  <div class="col">
                    <img
                      src={fram6}
                      className="d-block img-fluid"
                      alt="fram-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col">
                  <img src={fram7} className="d-block img-fluid" alt="fram-7" />
                </div>
                <div class="col">
                  <img src={fram8} className="d-block img-fluid" alt="fram-8" />
                </div>
                <div class="col">
                  <img src={fram9} className="d-block img-fluid" alt="fram-9" />
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
