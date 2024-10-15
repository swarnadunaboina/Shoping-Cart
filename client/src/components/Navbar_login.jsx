import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Navbar_LoginComponent from './Navbar_LoginComponent';
function Navbar_login(){
    let loggedIn = false;
    return (
        <div className='navBar'>
            <div className='navBar-logo'>Dashboard</div>
           <ul>
            <li><Typography sx={{ minWidth: 100 }}><Link to='/signup'>Register</Link></Typography></li>
            { 
            loggedIn?(<li><Navbar_LoginComponent/></li>):<li><Typography sx={{ minWidth: 100 }}><Link to='/login'>Login</Link></Typography></li>
            }
            </ul>
        </div>
    )
}
export default Navbar_login