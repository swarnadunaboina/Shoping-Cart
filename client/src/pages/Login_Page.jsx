import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Validation_login} from '../validation'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emailUpdate } from '../redux/Actions/login_action'
import Navbar_LoginComponent from '../components/Navbar_LoginComponent'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const { email, password } = values;
    const changeHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault()
        setErrors(Validation_login(values))
        axios.post('http://localhost:3001/login', { email, password })
            .then((result) => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/shoppingCartDashboard')
                    dispatch(emailUpdate(email));
                }
                else {
                    document.getElementById("error").innerHTML = "Invalid Details";
                }
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            <Navbar_LoginComponent />
            <Box 
            sx={{
                width: 400,
                mx: 'auto',
                my: 4,
                py: 10,
                px: 5,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
                alignSelf: 'center'
            }}
            >
                <Stack spacing={2}>
                    <Item>
                        <center className='container'>
                        <form onSubmit={submitHandler}>
                            <div className="loginBox">
                                <div>
                                    <Typography level="h4" component="h1">
                                        <b>Welcome!</b>
                                    </Typography>
                                    <Typography level="body-sm">Login in to continue.</Typography>
                                </div>
                                <span id='error' style={{ color: "red" }}></span>
                                <div className='in'>
                                    <input id="email" type="text" placeholder='Email' name="email" onChange={changeHandler} />
                                </div>
                                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                <div className='in'>
                                    <input type="password" placeholder='Password' name="password" onChange={changeHandler} />
                                </div>
                                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                                <div className='in'>
                                    <input type="Submit" name="submit" placeholder='Login' style={{ backgroundColor: 'orange' }} />
                                </div>
                                    Don&apos;t have an account?<Link to='/signup'>Sign Up</Link>
                            </div>
                        </form>
                    </center>
                    </Item>
                </Stack>
            </Box>
        </>
    )
}

export default Login
