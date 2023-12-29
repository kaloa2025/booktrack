import React, { useState } from 'react'
import Nav from './Nav'
import '../components/CSS/login.css'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

export default function Login() {
  const[cred,setCred]= useState({name:"",password:""})
  let navigate=useNavigate();
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    const response= await fetch('http://localhost:5000/api/loginuser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:cred.name,password:cred.password})
    });
    const json=await response.json()
    console.log(json);
    if(!json.success)
    {
      alert("Enter valid Credentials")
    }
    if(json.success)
    {
      navigate("/home");
      alert("Welcome Back !!")
      
    }
  }

  const onChange=(event)=>
  {
    setCred({...cred,[event.target.name]:event.target.value})
  }

  return (
    <div className='login-container'>
        <div className='login-square'>
          <form onSubmit={handleSubmit}>
            <p className='l-font'>NAME</p>
            <input type='text' name='name' value={cred.name} onChange={onChange}></input>
            <p className='l-font'>PASSWORD</p>
            <input type='text' name='password' value={cred.password} onChange={onChange}></input>
            <div className='l-list'><ul><li><button className='l-but1' type='submit'>LOGIN</button></li><li><Link to='/register'><button className='l-but2'>REGISTER</button></Link></li></ul></div>
          </form>
        </div>
    </div>
  )
}
