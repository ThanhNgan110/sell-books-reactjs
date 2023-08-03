import React, { useEffect } from "react";
import arrow from "../assets/svg/arrow-right.svg";
import "../index.css";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { fetchProductFromCart } from "../store/cart-actions";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductFromCart());
  }, [dispatch]);

  const dataCart = useSelector((state) => state.carts.items);
  const convertArray = Object.values(dataCart);

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
                  <div className="table-responsive">
                    <table className="table  table_shop">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      {convertArray.map((item) => (
                        <CartItem
                          cart={{
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity:item.quantity
                          }}
                        />
                      ))}
                    </table>
                  </div>
                </div>
                <div className="col-lg-4 ps-lg-4 p-0">
                  <CartTotal />
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
