import React from "react";
import { Card} from "reactstrap";
import { useNavigate } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import { singleProduct } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
const Card_Login_Component = ({ products }) => {
    let data = useSelector((state) => state.product.productName);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const link = (item)=>{
        navigate("/singleProductLogin")
        dispatch(singleProduct(item))
    }
    return <div className="item-display-list" >
        {
            products && products.length && products.map((item, index) => {
                if (data === "All" || data === item.company || data === item.category) {
                    return (
                        <Card key={index} className="card_Section">
                            <div onClick={()=>{link(item)}}>
                                <div>
                                    <img
                                        alt="Sample"
                                        src={item.image}
                                    />
                                </div>
                                <div>                                   
                                        {item.name}                                   
                                </div>
                                <div>
                                        {item.price}
                                        <p>Free Delivery</p>
                                        <p style={{ color: "green" }}>Bank Offer</p>
                                </div>
                            </div>
                         </Card>
                    )
                }
            })
        }
    </div>
}

export default Card_Login_Component;