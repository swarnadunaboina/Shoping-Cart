import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from '../validation'
import Navbar_LoginComponent from '../components/Navbar_LoginComponent'
import { Link } from 'react-router-dom'
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
const SignUp = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})
    const { firstName, lastName, email, phoneNumber, password } = values;
    const changeHandler = e => {
        var newData = { ...values, [e.target.name]: e.target.value }
        setValues(newData)
    }
    const Navigate = useNavigate()
    const submitHandler = e => {
        e.preventDefault()
        setErrors(Validation(values))
        axios.post('http://localhost:3001/signup', { firstName: firstName, lastName: lastName, email: email, password: password, phoneNumber: phoneNumber })
            .then(response => {
                console.log('signup post res---' + JSON.stringify(response.data.user));
                Navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <Navbar_LoginComponent />
            <Box sx={{
                width: 530,
                mx: 'auto',
                my: 4,
                py: 3,
                px: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
                alignSelf: 'center'
            }}>
                <Stack spacing={2}>
                    <Item>
                        <center className='container'>
                            <form onSubmit={submitHandler}>
                                <div >
                                    <Typography level="h4" component="h1">
                                        <b>Welcome!</b>
                                    </Typography>
                                    <Typography level="body-sm">Sign Up to continue.</Typography>
                                </div>
                                <div className='details'>
                                    <div className='in'>
                                        <input id="firstName" type="text" placeholder='First Name' name="firstName" value={firstName} onChange={changeHandler} />
                                        <div>{errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}</div>
                                    </div>
                                    <div className='in'>
                                        <input id="lastName" type="text" placeholder='Last Name' name="lastName" value={lastName} onChange={changeHandler} />
                                        <div>{errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}</div>                                   
                                    </div>   
                                </div>
                                <div className='details'>
                                    <div className='in'>
                                        <input id="email" type="text" placeholder='Email' name="email" value={email} onChange={changeHandler} />
                                        <div>{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}</div>
                                    </div>                                    
                                    <div className='in'>
                                        <input id="phoneNumber" type="text" placeholder='Phone Number' name="phoneNumber" value={phoneNumber} onChange={changeHandler} />
                                        <div>{errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}</div>
                                    </div>                                   
                                </div>
                                <div className='details'>
                                    <div className='in'>
                                        <input type="password" placeholder='Password' name="password" value={password} onChange={changeHandler} />
                                        <div>{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}</div>
                                    </div>                                    
                                    <div className='in'>
                                        <input type="confirmPassword" placeholder='Confirm Password' name="confirmPassword" />
                                        <div>{errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}</div>
                                    </div>                                    
                                </div>
                                    <div className='in'>
                                        <input type="submit" name="submit" style={{ backgroundColor: 'orange' }} />
                                    </div>
                                    You have an account?<Link to='/login'>Login</Link>
                            
                            </form>
                        </center>
                    </Item>
                </Stack>
            </Box>
        </>
    )
}

export default SignUp