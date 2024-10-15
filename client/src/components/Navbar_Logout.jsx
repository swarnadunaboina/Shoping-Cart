import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
function Navbar_login(){
    return (
        <div className='navBar'>
            <div className='navBar-logo'>Dashboard</div>
            <ul className='navBar-list'>
            <li><Typography sx={{ minWidth: 100 }}><Link to='/home'>Home</Link></Typography></li>
            <li><Typography sx={{ minWidth: 100 }}><Link to='/Contact'>Contact</Link></Typography></li>
            <li><Typography sx={{ minWidth: 100 }}><Link to='/admissions'>Admissions</Link></Typography></li>
            <li><Typography sx={{ minWidth: 100 }}><Link to='/signup'>Register</Link></Typography></li>
            <li><ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon></li>
            <li><Typography sx={{ minWidth: 100 }}><Link to='/login'>Login</Link></Typography></li>
            </ul>
        </div>
    )
}
export default Navbar_login