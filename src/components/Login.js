import React, {useState} from 'react'
import logo from '../Images/live-chat.png'
import { Backdrop, circularProgress ,Button, TextField } from "@mui/material"
import { useNavigate ,Link, json } from'react-router-dom';
import axios from 'axios';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  
  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");
  let navigate= useNavigate();

  const changeHandler = (e)=>{
    setData({...data, [e.target.name]: e.target.value});
  };
  const loginHandler = async (e) =>{
    setLoading(true);
    console.log(data);
    try{
      const config = {
        headers:{
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        "http://localhost:8080/user/login",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({msg:"Success", key: Math.random()});
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    }
    catch(error){
      setLogInStatus({
        msg: "Invalid Username or Password",
        key: Math.random(),
    });
    }
    setLoading(false);
  };

  const signUpHandler = async () =>{
    setLoading(true);
    try{
      const config = {
        headers:{
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/signup",
        data,
        config
      );
      console.log(response)
      setSignInStatus({ msg: "Success", key: Math.random()});
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
    }catch(error){
      console.log(error);
      if (error.response.status === 405){
        setLogInStatus({
          msg: "User with this email ID already exists",
          key: Math.random(),
        });
      }
      if(error.response.status === 406){
        setLogInStatus({
          msg: "User Name already taken,  please choose another one.",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };
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