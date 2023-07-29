import { productActions } from "./product-slice";

export const fetchProductOutStanding = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://64a62afc00c3559aa9c06b8c.mockapi.io/product"
    );
    if (response.ok) {
      const data = await response.json();
      dispatch(productActions.loadData(
       data
      ));
      // alert("Send successs");
    } else {
      throw new Error("Call api fail");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchProductById = (product_id) => async(dispatch) => {
  try {
    const response = await fetch(
      `https://64a62afc00c3559aa9c06b8c.mockapi.io/product/?id=${product_id}`
    )
    if(response.ok){
      const data = await response.json();
      console.log(data);
      dispatch(productActions.loadProductById(data));
    }
    else{
      throw new Error("Call api product by id fail");

    }
    
  } catch (error) {
    console.log(error.message);
    
  }
}