import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Navbar_LogoutComponent from '../components/Navbar_LogoutComponent';
import Home_Page from './Home_Page';
import Categories_Logout_Component from '../components/Categories/categories_Logout';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  export default function DashBoard_LoginPage() {
    return (
      <>
      <div>
      <Navbar_LogoutComponent/>
      </div>
      <div>
      <Box sx={{overflowX: 'hidden', overflowY: 'hidden'}}>
        <Stack>
          <Item><Categories_Logout_Component/></Item>
          <Item><Home_Page/></Item>
        </Stack>
      </Box>
      </div>
    </>
    );
  }
  