import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const [state,dispatch] = useContext(AuthContext);
const navigate = useNavigate();

const userLogin = ({email,password})=>{
 return axios({
    url:"https://reqres.in/api/login",
    method:"POST",
    data:{
      email,
      password
    }
  })
}

const handleSubmit = (e) =>{
  e.preventDefault();
  userLogin({email,password}).then((res)=>{
    console.log(res);
    dispatch({
      type:"LOGIN_SUCESS",
      payload:{
        token: res.data.token
      }
    })
   return navigate("/products");
  }).catch(err=>{
    console.log(err);
  })
}

const handleOut = () =>{
    dispatch({
        type:"LOGOUT_SUCESS"
    });
}

if(state.isAuth){
  return (
    <div style={{marginBottom:"60vh"}}>
        <h3>
            LogOut here
        </h3>

        <button onClick={handleOut}>Log Out</button>
    </div>
  )
}

  return (
    <div>
        <h1>Login Here</h1>
        <div style={{maxWidth:"400px", margin:"auto",marginBottom:"45vh"}}>
      <form onSubmit={handleSubmit}>
        <div><input type="email"  value={email} placeholder="enter email" onChange={e=>setEmail(e.target.value)} /></div>
        <div><input type="password" value={password} placeholder="enter Password" onChange={e=>setPassword(e.target.value)} /></div>
        <div><button>Submit</button></div>
      </form>
      <div style={{marginTop:"30px"}}>
        <p>
            email : eve.holt@reqres.in
        </p>
        <p>
            password : cityslicka
        </p>
      </div>
      </div>
    </div>
  )
}

export default Login