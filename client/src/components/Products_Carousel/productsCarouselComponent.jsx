import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './productsCarousel.css'
import { Card } from "reactstrap";
const ProductsCarouselComponent = ({ products, responsive }) => {
    console.log("componentPage",products)
    return <div className="product_wrap">
        <div className="lSection">
            {products.desc}
        </div>
        <div className="rSection">
            <Carousel responsive={responsive}>
                {
                    products && products.list.length && products.list.map((item, index) => {
                        return (
                            <Card
                                className="my-2"
                                color="secondary"
                                outline
                                style={{
                                    width: '16rem',
                                    height: '16rem'
                                }}
                                key={index}
                            >
                                <div className="product" >
                                    <div>{item.name}</div>
                                    <div><img src={item.image} /></div>
                                    <div>{item.startPrice}</div>
                                </div>
                            </Card>
                        )
                    })
                }
            </Carousel>
        </div>
    </div>
}

export default ProductsCarouselComponent;