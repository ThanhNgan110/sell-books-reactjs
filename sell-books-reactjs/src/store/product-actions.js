import { productActions } from "./product-slice";

export const fetchProductOutStanding = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://64a62afc00c3559aa9c06b8c.mockapi.io/product"
    );
    if (response.ok) {
      const data = await response.json();
      // const convertData = Object.values(data);
    //   console.log(data);
      // console.log(convertData);
      dispatch(productActions.loadData(
       data
      ));
      alert("Send successs");
    } else {
      throw new Error("Call api fail");
    }
  } catch (error) {
    console.log(error.message);
  }
};
