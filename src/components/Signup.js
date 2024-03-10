import React from 'react'
import logo from '../Images/live-chat.png'
import { Button, TextField } from "@mui/material"
import { Link } from 'react-router-dom'; 

function Signup() {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} alt="Logo" className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p>Create Your Account</p>
            <TextField 
            id="outlined-basic" 
            label="Enter Username" 
            variant="outlined" 
            />
            <TextField 
            id="outlined-basic" 
            label="Enter Email Address" 
            variant="outlined" 
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button
                variant="outlined">SIGN UP</Button>
            <p className='have-account'>Already have an Account? <Link to={"/login"}>LogIn</Link></p>
        </div>
    </div>
  );
}

export default Signup