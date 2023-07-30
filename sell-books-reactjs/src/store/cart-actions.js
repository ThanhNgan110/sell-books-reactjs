import { cartActions } from "./cart-slice";
export const fetchProductFromCart = (productById) => async dispatch => {
    try {
        const response = await fetch("https://react-http-6925e-default-rtdb.firebaseio.com/carts.json",{
            method:"PUT",
            body: JSON.stringify(productById),
        });
        if(response.ok){
          dispatch(cartActions.insertProductFromCart({
            items: productById.items,
            
          }))
        }
        else{
            throw new Error("Send request fail")
        }
        
    } catch (error) {
        console.log(error);
        
    }

}