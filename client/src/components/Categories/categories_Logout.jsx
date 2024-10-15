import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDisplay } from "../../redux/Actions/products_action";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useState } from "react";
function Categories_Logout_Component(){
    let data = useSelector((state)=> state.product.productName);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/categories")
        .then((res) => res.json())
        .then((res) => {
            if(res.status === 101){
               setCategories(res.data)
            }
        })
    },[])
const navigate = useNavigate()
const dispatch = useDispatch()
const productsDisplay=(item)=>{
    dispatch(productDisplay(item))
    navigate("/logoutProducts")
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
export default Categories_Logout_Component