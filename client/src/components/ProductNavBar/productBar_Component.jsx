import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from "react-redux";
import { productDisplay } from "../../redux/Actions/products_action";
import { useSelector } from 'react-redux'
    
const ProductBar_Component = ({ products}) => {
    let data = useSelector((state)=> state.product.productName);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        
    };
    const dispatch = useDispatch()
    const productsDisplay=(item)=>{
        dispatch(productDisplay(item))
    }
    return <div>
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className="productBar">{products.desc}</div>
            </Button>
        </div>
        <div >
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    products && products.list.length && products.list.map((item, index) => {
                        return (
                            <div  key={index}>
                                <MenuItem onClick ={()=>{{productsDisplay(data===item.name?"All":item.name)} ;{handleClose}}}>{item.name}</MenuItem>
                            </div>
                        )
                    })
                }
            </Menu>
        </div>

    </div>
}

export default ProductBar_Component;