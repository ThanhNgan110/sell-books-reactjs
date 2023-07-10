import React from "react";
import { Link } from "react-router-dom";
import fram1 from "../assets/icons/icon-khung-gio-sale.png";
import fram2 from "../assets/icons/icon-phieu-giam-gia.png";
import fram3 from "../assets/icons/icon-sach-ban-chay.png";
import fram4 from "../assets/icons/icon-sach-gia-re.png";
import fram5 from "../assets/icons/icon-sach-noi-bat.png";
import fram6 from "../assets/icons/icon-co-the-ban-se-thich.png";
import fram7 from "../assets/icons/icon-sach-free.png";
import fram8 from "../assets/icons/icon-sach-tinh-phi.png";
import fram9 from "../assets/icons/icon-tac-gia-favourite.png";
import "../assets/css/notification.css";

const Notification = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <div className="row py-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-2">
                    <Link>
                      <h2 className="text-center">
                        <img className="pb-2" src={fram1} alt="fram-1" />
                        <h6 className="text-center title-frame text-gray">Khung giờ săn sale</h6>
                      </h2>
                    </Link>
                  </div>
                  <div className="col-2">
                    <Link>
                      <h2 className="text-center">
                        <img className="pb-2" src={fram2} alt="fram-2" />
                        <h6 className="title-frame bs-gray-dark">Phiếu giảm giá</h6>
                      </h2>
                    </Link>
                  </div>
                  <div className="col-2">
                    <Link>
                      <h2 className="text-center">
                        <img className="pb-2" src={fram3} alt="fram-3" />
                        <h6 className="text-center title-frame bs-gray">Sách bán chạy</h6>
                      </h2>
                    </Link>
                  </div>
                  <div className="col-2">
                    <Link>
                      <h2 className="text-center">
                        <img className="pb-2" src={fram4} alt="fram-4" />
                        <h6 className="title-frame">Sách nổi bật</h6>
                      </h2>
                    </Link>
                  </div>
                  <div className="col-2">
                    <Link>
                      <h2 className="text-center">
                        <img className="pb-2" src={fram5} alt="fram-5" />
                        <h6 className="title-frame">Sách giá rẻ</h6>
                      </h2>
                    </Link>
                  </div>
                  <div className="col-2">
                    <Link>
                      <h2 className="text-center">
                        <img className="pb-2" src={fram6} alt="fram-6" />
                        <h6 className="title-frame">Có thể bạn sẽ thích</h6>
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <Link>
                  <h2 className="text-center">
                    <img className="pb-2" src={fram7} alt="fram-7" />
                    <h6 className="title-frame">Sách miễn phí</h6>
                  </h2>
                </Link>
              </div>
              <div className="col-2">
                <Link>
                  <h2 className="text-center">
                    <img className="pb-2" src={fram8} alt="fram-8" />
                    <h6 className="title-frame">Sách tính phí</h6>
                  </h2>
                </Link>
              </div>
              <div className="col-2">
                <Link>
                  <h2 className="text-center">
                    <img className="pb-2" src={fram9} alt="fram-9" />
                    <h6 className="title-frame">Tác giả yêu thích</h6>
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
