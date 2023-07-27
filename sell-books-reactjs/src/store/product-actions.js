import { productActions } from "./product-slice";

export const fetchProductOutStanding = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://react-http-6925e-default-rtdb.firebaseio.com/product.json"
    );
    if (response.ok) {
      const data = await response.json();
      const convertData = Object.values(data);
    //   console.log(data);
      console.log(convertData);
      dispatch(productActions.loadData(convertData));
      alert("Send successs");
    } else {
      throw new Error("Call api fail");
    }
  } catch (error) {
    console.log(error.message);
  }
};
