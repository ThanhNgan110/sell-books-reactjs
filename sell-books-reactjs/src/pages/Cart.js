import React from "react";
import arrow from "../assets/svg/arrow-right.svg";
import "../index.css";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  return (
    <main>
      <div className="bg-punch-light">
        <div className="container">
          <section className="section-cart">
            <div className="d-flex justify-content-between align-items-center">
              <nav>
                <a className="link-black-100" href="/">
                  Home
                </a>
                <span>
                  <img src={arrow} alt="My Happy SVG" />
                </span>
                <a className="link-black-100" href="/">
                  Cart
                </a>
              </nav>
            </div>
            <div>
              <h2 className="text-center font-size-7 m-4">
                Your cart: 3 items
              </h2>
              <div className="row p-3">
                <div className="col-lg-8 col-sm-12 bg-white border mb-3">
                  <CartItem />
                  {/* <div className="table-responsive">
                    <table className="table  table_shop">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItem.map((items) => (
                          <tr>
                            <td className="align-middle">
                              <div className="d-flex align-items-center">
                                <Link to="">
                                  <img
                                    src={items.src}
                                    alt=""
                                    style={{ width: "100px", height: "auto" }}
                                  />
                                </Link>
                                <div className="ms-3 ">
                                  <Link
                                    to=""
                                    className="font-weight-medium black-16"
                                  >
                                    {items.title}
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <span className="amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                {items.price}
                              </span>
                            </td>
                            <td className="align-middle">
                              <div className="d-flex align-items-center">
                                <div className="border px-2 py-1 width-120">
                                  <div className="js-quantity">
                                    <div className="d-flex align-items-center">
                                      <a
                                        className="js-minus text-dark"
                                        href="/"
                                      >
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
                            </td>
                            <td className="align-middle">
                              <span className="amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                {items.price}
                              </span>
                            </td>
                            <td className="align-middle">
                              <Link to="">
                                <img src={remove} alt="product-remove" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> */}
                </div>
                <div className="col-lg-4 ps-lg-4 p-0">
                  <CartTotal />
                  {/* <div className=" bg-white border total-cart">
                    <h4 className="cart-total mb-4">Cart Totals</h4>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6>Tổng tiền hàng</h6>
                      <h6>$150</h6>
                    </div>
                    <div className="border-bottom mb-2"></div>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6>Tổng số tiền</h6>
                        <h6>$150</h6>
                      </div>
                      <div class="wc-proceed-to-checkout">
                        <Link
                          to=""
                          class="checkout-button button  btn btn-dark btn-block rounded-0 py-3"
                        >
                          Thanh toán
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default Cart;
