import React, { useState } from 'react';
import logo from '../Images/live-chat.png';
import { Backdrop, CircularProgress, Button, TextField } from "@mui/material";
import { useNavigate,} from 'react-router-dom';
import axios from 'axios';
import Toaster from './toaster';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");
  let navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        "http://localhost:8080/user/login",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    }
    catch (error) {
      setLogInStatus({
        msg: "Invalid Username or Password",
        key: Math.random(),
      });
      setLoading(false);
    }
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/signup",
        data,
        config
      );
      console.log(response)
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already taken,  please choose another one.",
          key: Math.random(),
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt="logo" className='welcome-logo' />
        </div>
        {showLogin && (
          <div className='login-box'>
            <p className='login-text'>Login to your account</p>
            <TextField
              onChange={changeHandler}
              id='standard-basic'
              label='Enter Username'
              variant='outlined'
              color='secondary'
              name='name'
            />
            <TextField
              onChange={changeHandler}
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              color='secondary'
              name='password'
            />
            <Button
              variant='outlined'
              color='secondary'
              onClick={loginHandler}
            >
              Login
            </Button>
            <p>
              Don't have an Account? { ' ' }
              <span
                className='hyper'
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign Up
              </span>
            </p>
            {logInStatus ? (<Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
          </div>
        )}
        {!showLogin && (
          <div className='login-box'>
            <p className='login-text'>Create your Account</p>
            <TextField
              onChange={changeHandler}
              id='standard-basic'
              label='Enter Username'
              variant='outlined'
              color='secondary'
              name='name'
              helperText=""
            />
            <TextField
              onChange={changeHandler}
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              color='secondary'
              name='password'
            />
            <Button
              variant='outlined'
              color='secondary'
              onClick={signUpHandler}
            >
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span
                className='hyper'
                onClick={() => {
                  setShowLogin(true)
                }} 
              >
                Log in
              </span>
            </p>
            {signInStatus? (<Toaster key={signInStatus.key} message={signInStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
