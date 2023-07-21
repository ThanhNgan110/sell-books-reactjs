import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../assets/css/cartTotal.css";

const CartTotal = () => {
  return (
    <div className=" bg-white border total-cart">
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
    </div>
  );
};

export default CartTotal;
