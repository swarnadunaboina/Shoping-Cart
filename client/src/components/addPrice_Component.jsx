import React from "react";
import { useSelector } from "react-redux";
const AddPrice_Component = ()=>{
    let data = useSelector((state)=> state.cart.cartPrice);
    return<>
        {data}
    </>
}
export default AddPrice_Component