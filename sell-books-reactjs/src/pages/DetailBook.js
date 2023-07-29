import React from "react";
import {useParams} from "react-router-dom";

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
  dispatch(fetchProductById(product_id));
  const productById = useSelector((state) => state.products.items);
  console.log(productById);



  return (
    <main>
      <div className="bg-punch-light">
        <div className="container">
          <section className="section-detailBook">
            <div className="d-flex justify-content-between align-items-center">
              <nav>
                <a className="link-black-100" href="/">
                  Home
                </a>
                <span>
                  <img src={arrow} alt="My Happy SVG" />
                </span>
                <a className="link-black-100" href="/">
                  Product
                </a>
                <span>
                  <img src={arrow} alt="My Happy SVG" />
                </span>
                <a className="link-black-100" href="/">
                  DetailBook
                </a>
              </nav>
            </div>
            <div className="product p-3">
              <div className="row bg-white border p-3">
                <div className="col-lg-6 col-sm-12 text-center border-right pb-3">
                  <div className="row d-flex flex-column">
                    <div className="col">
                    <img className="img-fluid img-choose " src="" alt="img" />
                    </div>
                 
                  
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="book-intro">
                    <div>
                      <h1 className="product_title font-size-26">
                        Where the Crawdads Sing
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
                        <span className="ml-2 text-gray-600">Anna Banks</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed exercitation ullamco laboris nisi ut aliquip exea
                      </p>
                    </div>
                    <p className="price font-size-22 font-weight-medium mb-4">
                      71.000
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
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <p>
               Nhiều người trong chúng ta tin rằng cuộc đời của ta bắt đầu từ lúc
            chào đời và kết thúc khi ta chết. Chúng ta tin rằng chúng ta tới từ
            cái Không, nên khi chết chúng ta cũng không còn lại gì hết. Và chúng
            ta lo lắng vì sẽ trở thành hư vô. Bụt có cái hiểu rất khác về cuộc
            đời. Ngài hiểu rằng sống và chết chỉ là những ý niệm không có thực.
            Coi đó là sự thực, chính là nguyên do gây cho chúng ta khổ não. Bụt
            dạy không có sinh, không có diệt, không tới cũng không đi, không
            giống nhau cũng không khác nhau, không có cái ngã thường hằng cũng
            không có hư vô. Chúng ta thì coi là Có hết mọi thứ. Khi chúng ta
            hiểu rằng mình không bị hủy diệt thì chúng ta không còn lo sợ. Đó là
            sự giải thoát. Chúng ta có thể an hưởng và thưởng thức đời sống một
            cách mới mẻ. Không diệt Không sinh Đừng sợ hãi là tựa sách được
            Thiền sư Thích Nhất Hạnh viết nên dựa trên kinh nghiệm của chính
            mình. Ở đó, Thầy Nhất Hạnh đã đưa ra một thay thế đáng ngạc nhiên
            cho hai triết lý trái ngược nhau về vĩnh cửu và hư không: “Tự muôn
            đời tôi vẫn tự do. Tử sinh chỉ là cửa ngõ ra vào, tử sinh là trò
            chơi cút bắt. Tôi chưa bao giờ từng sinh cũng chưa bao giờ từng
            diệt” và “Nỗi khổ lớn nhất của chúng ta là ý niệm về đến-đi,
            lui-tới.” Được lặp đi lặp lại nhiều lần, Thầy khuyên chúng ta thực
            tập nhìn sâu để chúng ta hiểu được và tự mình nếm được sự tự do của
            con đường chính giữa, không bị kẹt vào cả hai ý niệm của vĩnh cửu và
            hư không. Là một thi sĩ nên khi giải thích về các sự trái ngược
            trong đời sống, Thầy đã nhẹ nhàng vén bức màn vô minh ảo tưởng dùm
            chúng ta, cho phép chúng ta (có lẽ lần đầu tiên trong đời) được biết
            rằng sự kinh hoàng về cái chết chỉ có nguyên nhân là các ý niệm và
            hiểu biết sai lầm của chính mình mà thôi. Tri kiến về sống, chết của
            Thầy vô cùng vi tế và đẹp đẽ. Cũng như những điều vi tế, đẹp đẽ
            khác, cách thưởng thức hay nhất là thiền quán trong thinh lặng. Lòng
            nhân hậu và từ bi phát xuất từ suối nguồn thâm tuệ của Thiền sư
            Thích Nhất Hạnh là một loại thuốc chữa lành những vết thương trong
            trái tim chúng ta. Giá sản phẩm trên Tiki đã bao gồm thuế theo luật
            hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ
            giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
            phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ
            nước ngoài có giá trị trên 1 triệu đồng)..... 
            </p>
          
          </div>
          <div
            className="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
           <p>
               Nhiều người trong chúng ta tin rằng cuộc đời của ta bắt đầu từ lúc
            chào đời và kết thúc khi ta chết. Chúng ta tin rằng chúng ta tới từ
            cái Không, nên khi chết chúng ta cũng không còn lại gì hết. Và chúng
            ta lo lắng vì sẽ trở thành hư vô. Bụt có cái hiểu rất khác về cuộc
            đời. Ngài hiểu rằng sống và chết chỉ là những ý niệm không có thực.
            Coi đó là sự thực, chính là nguyên do gây cho chúng ta khổ não. Bụt
            dạy không có sinh, không có diệt, không tới cũng không đi, không
            giống nhau cũng không khác nhau, không có cái ngã thường hằng cũng
            không có hư vô. Chúng ta thì coi là Có hết mọi thứ. Khi chúng ta
            hiểu rằng mình không bị hủy diệt thì chúng ta không còn lo sợ. Đó là
            sự giải thoát. Chúng ta có thể an hưởng và thưởng thức đời sống một
            cách mới mẻ. Không diệt Không sinh Đừng sợ hãi là tựa sách được
            Thiền sư Thích Nhất Hạnh viết nên dựa trên kinh nghiệm của chính
            mình. Ở đó, Thầy Nhất Hạnh đã đưa ra một thay thế đáng ngạc nhiên
            cho hai triết lý trái ngược nhau về vĩnh cửu và hư không: “Tự muôn
            đời tôi vẫn tự do. Tử sinh chỉ là cửa ngõ ra vào, tử sinh là trò
            chơi cút bắt. Tôi chưa bao giờ từng sinh cũng chưa bao giờ từng
            diệt” và “Nỗi khổ lớn nhất của chúng ta là ý niệm về đến-đi,
            lui-tới.” Được lặp đi lặp lại nhiều lần, Thầy khuyên chúng ta thực
            tập nhìn sâu để chúng ta hiểu được và tự mình nếm được sự tự do của
            con đường chính giữa, không bị kẹt vào cả hai ý niệm của vĩnh cửu và
            hư không. Là một thi sĩ nên khi giải thích về các sự trái ngược
            trong đời sống, Thầy đã nhẹ nhàng vén bức màn vô minh ảo tưởng dùm
            chúng ta, cho phép chúng ta (có lẽ lần đầu tiên trong đời) được biết
            rằng sự kinh hoàng về cái chết chỉ có nguyên nhân là các ý niệm và
            hiểu biết sai lầm của chính mình mà thôi. Tri kiến về sống, chết của
            Thầy vô cùng vi tế và đẹp đẽ. Cũng như những điều vi tế, đẹp đẽ
            khác, cách thưởng thức hay nhất là thiền quán trong thinh lặng. Lòng
            nhân hậu và từ bi phát xuất từ suối nguồn thâm tuệ của Thiền sư
            Thích Nhất Hạnh là một loại thuốc chữa lành những vết thương trong
            trái tim chúng ta. Giá sản phẩm trên Tiki đã bao gồm thuế theo luật
            hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ
            giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
            phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ
            nước ngoài có giá trị trên 1 triệu đồng)..... 
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
  );
};

export default DetailBook;
