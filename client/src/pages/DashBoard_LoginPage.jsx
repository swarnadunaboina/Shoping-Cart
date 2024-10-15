import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Navbar_LoginComponent from '../components/Navbar_LoginComponent';
import Home_Page from './Home_Page';
import '../index.css'
import Categories from '../components/Categories/categoriesContainer';
//import Navbar_LogoutComponent from '../components/Navbar_LogoutComponent';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  export default function DashBoard_LoginPage() {
    return (
        <div>
      <div>
       < Navbar_LoginComponent/>
       </div>
       <div>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item><Categories/></Item>
          <Item>< Home_Page /></Item>
        </Stack>
      </Box>
      </div>
      </div>
    );
  }