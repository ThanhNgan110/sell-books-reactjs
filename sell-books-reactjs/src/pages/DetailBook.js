import React,{useEffect} from "react";
import "../assets/css/detailBook.css";
import "../index.css";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import DetailBookItem from "../components/DetailBookItem";
import { fetchProductById } from "../store/product-actions";
import { sendProductFromCart } from "../store/cart-actions";


const DetailBook = () => {
  const {product_id} = useParams();
  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(fetchProductById(product_id));
  },[dispatch, product_id]);
 

  const productById = useSelector((state) => state.products.single_product);
  let convertArray = Object.values(productById);
  const product = useSelector((state) => state.carts);
  console.log(product);
  useEffect(()=>{
    dispatch(sendProductFromCart(product))
  }, [dispatch, product])



  return (
    convertArray.map((item) =>(
      <ul className="p-0">
        <li key={item.id}>
        <DetailBookItem items={{id:item.id, title:item.title, image:item.image, price:item.price, content:item.content, author:item.author}}/>
        </li>
      </ul>
    ))
  );
};

export default DetailBook;
