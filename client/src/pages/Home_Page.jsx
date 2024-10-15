import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import Categories from '../components/Categories/categoriesContainer';
import Slider from '../components/SliderComponent'
import ProductsCarousel from '../components/Products_Carousel';
import { useEffect, useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home_Page() {
  const [products, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("products",products)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./response/carousel_list.json");
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
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item><Slider /></Item>
        <Item><ProductsCarousel products={products.electronics}/></Item>
        <Item><ProductsCarousel products={products.toys}/></Item>
        <Item><ProductsCarousel products={products.styles}/></Item>
      </Stack>
    </Box>
    
    </>
  );
}
