import React from "react";
import { useEffect, useState } from "react";
import ProductBar_Container from "./ProductNavBar/productBar_Container";
const CategoriesBar_Component =()=>{
    const [categories, setcategories] = useState();
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
      const Data = async () => {
        try {
          const response = await fetch("./response/categories_list.json");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setcategories(result);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      Data();
    }, []); 
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return<>
    <div className='productBar'>
          < ProductBar_Container categories={categories.grocery} />
          < ProductBar_Container categories={categories.fashion}  />
          < ProductBar_Container categories={categories.electronics}  />
          < ProductBar_Container categories={categories.mobiles}/>
          < ProductBar_Container categories={categories.home_Furniture}  />
          < ProductBar_Container categories={categories.appliences}  />
          < ProductBar_Container categories={categories.toys}  />
          < ProductBar_Container categories={categories.travel} />
          < ProductBar_Container categories={categories.two_Weeler} />
    </div>
    </>
}
export default CategoriesBar_Component