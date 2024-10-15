import React from "react";
import Card_Login_Component from "./card_Login_Component";
import { useEffect, useState } from "react";
const Card_Container = () =>{
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
  console.log("container card",products)
    return<>
    <Card_Login_Component products={products} />
    </> 
}
export default Card_Container;