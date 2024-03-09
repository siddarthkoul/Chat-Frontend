import React from 'react'
import logo from '../Images/live-chat.png'
import { Button, TextField } from "@mui/material"
import { Link } from'react-router-dom';

function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} alt="Logo" className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your Account</p>
            <TextField 
            id="outlined-basic" 
            label="Enter Username" 
            variant="outlined" 
            />

            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button
                variant="outlined">Login</Button>
              <p className='have-account'>Don't have an Account? <Link to={"/Signup"}>Sign up</Link></p>

        </div>
    </div>
  );
}

export default Login