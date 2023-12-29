import React, { useState } from 'react'
import './CSS/login.css'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

export default function Reg() {
  const[cred,setCred]=useState({name:"",email:"",password:""})
  let navigate=useNavigate();
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    const response= await fetch('http://localhost:5000/api/createuser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password})
    });

    const json=await response.json()
    console.log(json);
    if(!json.success)
    {
      alert("Enter valid Credentials")
    }
    if(json.success)
    {
      navigate("/login");
      alert("Registration Completed")
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
            <p className='l-font'>EMAIL</p>
            <input type='text' name='email' value={cred.email} onChange={onChange}></input>
            <p className='l-font'>PASSWORD</p>
            <input type='text' name='password' value={cred.password} onChange={onChange}></input>
            <div className='l-list'><ul><li><button className='l-but2' type='submit'>REGISTER</button></li><li><Link to='/login'><button className='l-but1'>LOGIN</button></Link></li></ul></div>
            </form>
        </div>
    </div>
  )
}
