import React from "react";
import { useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Product_Qty from "../components/Product_Qty";
const FavoriteProducts=()=>{
    let data = useSelector((state)=> state.cart.favoriteItem);
    console.log("favoritepage",data)
        return (
            
            data && data.length && data.map((item, index) => {
                return(
                    <div>
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
                                    {/* <CardText>{itemSize}</CardText> */}
                                    <Product_Qty/>
                                </CardBody>
                            </div>
                        </div>
                       
                    </Card> 
                    </div>
                )
               
            })
            

        )
        
    
}
export default FavoriteProducts;