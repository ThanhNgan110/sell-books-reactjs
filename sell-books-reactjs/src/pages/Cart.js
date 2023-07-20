import React from 'react';
import arrow from "../assets/svg/arrow-right.svg";
import "../index.css";

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
            <h1 className="text-center font-size-7">Your cart: 3 items</h1>
            
          </div>
          
        </section>
      </div>
    </div>
  
  </main>
  )
}

export default Cart