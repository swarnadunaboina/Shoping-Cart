import React from "react";
import Navbar_LoginComponent from "../components/Navbar_LoginComponent";
import CategoriesBar_Component from "../components/CategoriesBar_Component";
import Card_Container from "../components/Card_Component/card_Container";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Products_Login_page = ({children}) => {
    if(!children){
        return <>
        <div className="navbars">
           < Navbar_LoginComponent/>
            <div>
                <Box sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <Stack>
                        <Item><CategoriesBar_Component /></Item>
                        <Item><Card_Container/></Item>
                    </Stack>
                </Box>
            </div>
        </div>
    </>
    }
    else{
        return <>
        <div className="navbars">
           < Navbar_LoginComponent/>
            <div>
                <Box sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <Stack>
                        <Item><CategoriesBar_Component /></Item>
                        <Item>{children}</Item>
                    </Stack>
                </Box>
            </div>
        </div>
    </> 
    }
    
    
}
export default Products_Login_page