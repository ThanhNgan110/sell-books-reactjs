import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";
import add from "../assets/svg/add.svg";
import remove from "../assets/svg/Trash.svg";
import minus from "../assets/svg/minus.svg";
import "../assets/css/cartItem.css";
import {useDispatch} from "react-redux";
import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {
  const {id, title, image, price, quantity} = props.cart; 
  // const [isCount, setIsCount] = useState(1);
  const dispatch = useDispatch();

  const addHandler = () => {
    // setIsCount((prevCount) => prevCount++);
    // console.log(isCount);
    dispatch(cartActions.toggleQuantity(id));
  }
  const minusHandler = () => {
    // setIsCount((prevCount) => prevCount--);
    // console.log(isCount);
    dispatch(cartActions.toggleQuantity(id));

  }

  return (
        <tbody>
            <tr key={id}>
              <td className="align-middle">
                <div className="d-flex align-items-center">
                  <Link to="">
                    <img
                      src={image}
                      alt=""
                      style={{ width: "150px", height: "auto" }}
                    />
                  </Link>
                  <div className="ms-3 ">
                    <Link to="" className="font-weight-medium black-16">
                      {title}
                    </Link>
                  </div>
                </div>
              </td>
              <td className="align-middle">
                <span className="amount amount">
                  {price}
                  <span className="woocommerce-Price-currencySymbol">đ</span>
                </span>
              </td>
              <td className="align-middle">
                <div className="d-flex align-items-center">
                  <div className="border px-2 py-1 width-120">
                    <div className="js-quantity">
                      <div className="d-flex align-items-center">
                      <button
                                className="js-minus text-dark"
                                onClick={minusHandler}
                                style={{ border: "none", background: "none" }}
                                disabled={""}
                              >
                                <img src={minus} alt="minus" />
                              </button>
                        <input
                          className="border-0 text-center form-control"
                          type="text"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="100"
                          value={quantity}
                        />
                       <button
                                className="js-minus text-dark"
                                onClick={addHandler}
                                style={{ border: "none", background: "none" }}
                                disabled={""}
                              >
                                <img src={add} alt="minus" />
                              </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="align-middle">
                <span className="amount amount">
                  {price}
                  <span className="woocommerce-Price-currencySymbol">đ</span>
                </span>
              </td>
              <td className="align-middle">
                <Link to="">
                  <img src={remove} alt="product-remove" />
                </Link>
              </td>
            </tr>
        </tbody>
     
  );
}

export default CartItem