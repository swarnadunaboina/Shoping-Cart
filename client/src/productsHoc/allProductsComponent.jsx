import React from "react";
import { Container } from "reactstrap";
import ProductsHoc from "../productsHoc/products.hoc";
//import Title from "./Title";
import 'bootstrap/dist/css/bootstrap.min.css';
const AllProductsPage = () => {
    const productsList = ProductsHoc();
    return <>
        <Container>
            <div className="productsView pt_20">
                {productsList()}
            </div>
        </Container>
    </>
}
export default AllProductsPage;