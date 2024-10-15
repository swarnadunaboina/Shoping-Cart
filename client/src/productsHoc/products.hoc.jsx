import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux'
import {cartUpdate,addCartItem} from '../redux/Actions/cart_action'
const ProductsHoc = () => {
    const dispatch = useDispatch();
    const [productsList, setProductsList] = useState([])
    useEffect(() => {
        fetch("./response/product_list.json")
            .then((res) => res.json())
            .then((response) => {
                setProductsList(response.data);
            })
    }, [])
   const addToCart = (item)=>{
    dispatch(cartUpdate())
    dispatch(addCartItem(item))
   }

    return () => {
        return (
            productsList && productsList.length && productsList.map((item, index) => {
                return(
                    <Card className="cardSection" key={index}>
                        <div className="flex">
                            <div>
                                <img
                                    alt="Sample"
                                    src={item.image}
                                />
                            </div>
                            <div>
                                <CardBody>
                                    <CardTitle tag="h3">
                                        {item.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {item.option}

                                    </CardSubtitle>
                                    
                                </CardBody>
                            </div>
                            <div className="priceD">
                            <CardTitle tag="h4">
                                {item.price}
                            </CardTitle>
                            <CardText  tag="h6">
                                <p>Free Delivery</p>
                                <p style={{color:"green"}}>Bank Offer</p>
                            </CardText>

                            </div>
                        </div>
                        <div>
                        <Button onClick ={()=>{addToCart(item)}}>
                            Add to Card
                        </Button>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon/>
                        </IconButton>
                        </div>
                    </Card>
                )
               
            })
        )
    }
    
}

export default ProductsHoc;