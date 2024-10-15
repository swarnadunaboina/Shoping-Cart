import React from "react";
import ProductBar_Component from "./productBar_Component";
const ProductBar_Container = (props) =>{
    return <ProductBar_Component products={props.categories}  />
}
export default ProductBar_Container