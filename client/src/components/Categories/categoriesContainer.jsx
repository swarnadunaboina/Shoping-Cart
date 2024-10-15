import { useEffect } from "react";
import { useState } from "react";
import Categories_Login_Component from "./categories_Login";
function Categories(){
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
    return(
        <Categories_Login_Component categories={categories} />
    )
}
export default Categories; 
