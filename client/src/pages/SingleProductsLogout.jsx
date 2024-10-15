import React from "react";
import { useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { addCartItem, cartUpdate } from "../redux/Actions";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Size_Container from "../components/Sizes_Component/size_container";
import Products_Logout_page from "./Products_Logout_Page";
const SingleProductLogout_Page = () => {
    let item = useSelector((state) => state.single.singleItem)
    console.log("singleproduct",item)
    const dispatch = useDispatch()
    const addToCart = (item) => {
        dispatch(cartUpdate())
        dispatch(addCartItem(item))
    }
    const renderCard = (
        <Card >
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
                            {item.option}

                        </CardSubtitle>
                        <CardText>
                            <Size_Container item={item} />
                        </CardText>
                    </CardBody>
                </div>
                <div className="price_Details">
                    <CardTitle tag="h4">
                        {item.price}
                    </CardTitle>
                    <CardText tag="h6">
                        <p>Free Delivery</p>
                        <p style={{ color: "green" }}>Bank Offer</p>
                    </CardText>

                </div>
            </div>
            <div className="card_Items">
                <Button
                    onClick={() => { addToCart(item) }}
                >
                    Add to Card
                </Button>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </div>


        </Card>
    )
    if(Products_Logout_page ){
        return(
            <div>
                <Products_Logout_page >
                {renderCard}
                </Products_Logout_page >
            </div>
        )
        }

}
export default SingleProductLogout_Page;