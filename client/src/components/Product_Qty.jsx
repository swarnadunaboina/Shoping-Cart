import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addQty,minusQty } from "../redux/Actions/cart_action";
import { useDispatch } from "react-redux";
const Product_Qty =()=>{
   //  let data = useSelector((state)=> state.cart.cartQty);
   const [qty,setQty] = useState(1)
   const dispatch = useDispatch()
const handleDecrement = ()=>{
   dispatch(minusQty())
   if(qty>1){
      dispatch(minusQty())
      setQty(qty=>qty - 1)
        
   }
}
const handleIncrement = ()=>{
   //  dispatch(addQty())
    if(qty<10){
      dispatch(addQty())
      setQty(qty=>qty + 1)
        
   }
}
return<>
     <div className="qtr_style">
        <button onClick={handleDecrement}>-</button>
        <div>{qty}</div>
        <button onClick={handleIncrement}>+</button>
     </div>
</>
}
export default Product_Qty;