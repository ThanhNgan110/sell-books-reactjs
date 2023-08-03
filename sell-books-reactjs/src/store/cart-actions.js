import { cartActions } from "./cart-slice";
export const sendProductFromCart = (product) => async dispatch => {
    try {
        const response = await fetch("https://react-http-6925e-default-rtdb.firebaseio.com/carts.json",{
            method:"PUT",
            body: JSON.stringify({
                items: product.items,
                totalQuantity:product.totalQuantity,
                totalPrice:product.totalPrice
            }),
        });
        if(response.ok){
            const result = await response.json();
            // console.log(result);
        
        }
        else{
            throw new Error("Send request fail")
        }
        
    } catch (error) {
        console.log(error); 
    }

}

export const fetchProductFromCart= () => async (dispatch) => {
    try {
      const response = await fetch(
        "https://react-http-6925e-default-rtdb.firebaseio.com/carts.json"
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(cartActions.replaceProductFromCart(
        {
          items: data.items,
          totalQuantity:data.totalQuantity,
          totalPrice:data.totalPrice

        }
        ));
        console.log(data);
        // alert("Send successs");
      } else {
        throw new Error("Call api fail");
      }
    } catch (error) {
      console.log(error.message);
    }
  };