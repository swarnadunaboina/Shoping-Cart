import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDisplay } from "../../redux/Actions/products_action";
import { useSelector } from 'react-redux'

function Categories_Login_Component(props){
    let data = useSelector((state)=> state.product.productName);
    console.log('props',props)
const {categories}=props
const navigate = useNavigate()
const dispatch = useDispatch()
const productsDisplay=(item)=>{
    dispatch(productDisplay(item))
    navigate("/loginProducts")
}
return(
    <>
    <ul className="navBar-list" > 

        {categories.map((item,index)=>{
            return <li key={index} onClick ={()=>{productsDisplay(data===item.name?"All":item.name)}}>
                <div><a><img src={item.img}/></a></div>
                <div>{item.name}</div> 
            </li>
        })}
    </ul>
    
    </>
)
}
export default Categories_Login_Component