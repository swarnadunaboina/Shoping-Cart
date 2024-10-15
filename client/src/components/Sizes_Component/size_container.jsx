import React from "react";
import Size_Component from "./size_component";
const Size_Container = ({item}) => {
    const kids_Size = ["2-3 Years", "3-4 Years", "4-5 Years", "5-6 Years", "6-7 Years", "7-8 Years", "8-9 Years", "9-10 Years"]
    const top_Wear = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]
    const bottom_Wear=[26,28,30,32,34]
    const shoes_Wear=[3,4,5,6,7,8,9,10]
        if(item.category == "Fashion" && item.company== "Women's Kurtas"){
           return <Size_Component size={top_Wear} />
        }
        else if(item.category== "Fashion" && item.company == "Kid's Wear"){
          return  <Size_Component size={ kids_Size } />
        }
        else if(item.category== "Fashion" && item.company == "Women' Pants"){
            return  <Size_Component size={ bottom_Wear } />
        }
        else if(item.category== "Fashion" && item.company == "shoes Wear"){
            return  <Size_Component size={ shoes_Wear } />
        }
}
export default Size_Container