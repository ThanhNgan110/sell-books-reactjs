import { cartActions } from "./cart-slice";
export const fetchProductFromCart = (product) => async dispatch => {
    try {
        const response = await fetch("https://react-http-6925e-default-rtdb.firebaseio.com/carts.json",{
            method:"PUT",
            body: JSON.stringify(product),
        });
        if(response.ok){
          dispatch(cartActions.insertProductFromCart(product));
          console.log(product);
        }
        else{
            throw new Error("Send request fail")
        }
        
    } catch (error) {
        console.log(error);
        
    }

}