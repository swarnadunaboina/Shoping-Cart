import React from "react";
import { useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Product_Qty from "../components/Product_Qty";
import AddPrice_Component from "../components/addPrice_Component";
//import { useState } from "react";
const AddToCart=()=>{
    let data = useSelector((state)=> state.cart.cartItem);
    let itemSize = useSelector((state)=> state.cart.itemSize);
    //const [size,setSize] = useState("")
        return (
            data && data.length && data.map((item, index) => {
                return(
                    <Card  key={index}>
                        <div className="card_Section">
                            <div>
                                <img
                                    alt="Sample"
                                    src={item.image}
                                />
                            </div>
                            <div className="card_Details">
                                <CardBody>
                                    <CardTitle tag="h3">
                                        {item.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        <p>{item.option}</p>
                                        <p>{item.price}</p>
                                    </CardSubtitle>
                                    <CardText>{itemSize}</CardText>
                                    <Product_Qty/>
                                </CardBody>
                            </div>
                        </div>
                        <div><AddPrice_Component/></div>
                    </Card>
                    
                    
                )
               
            })
        )
    
}
export default AddToCart;