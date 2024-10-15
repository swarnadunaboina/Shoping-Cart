import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useNavigate,} from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import { addCartItem, cartUpdate } from "../../redux/Actions/cart_action";
import { singleProduct } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { useEffect,useState } from "react";
const Card_Logout_Component = () => {
    let data = useSelector((state) => state.product.productName);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addToCart = (item) => {
            dispatch(cartUpdate())
        dispatch(addCartItem(item))
    }
    const link = (item)=>{
        navigate("/singleProductLogout")
        dispatch(singleProduct(item))
    }
    const [products, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./response/allProducts_list.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
    return <div className="item-display-list">
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

export default Card_Logout_Component;