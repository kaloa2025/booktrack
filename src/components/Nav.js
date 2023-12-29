import React from 'react'
import './CSS/Nav.css'
import logo from './Images/logo.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Register from '../screens/Register';
import Login from '../screens/Login';

export default function Nav() {
  return (
    <div>
        <br/>
        <ul>
            <li><Link to='/'><img src={logo} style={{width:"60%"}}></img></Link></li>
            <li style={{float: "right"}}><Link to='/register'><button className='Nbut'>REGISTER</button></Link></li>
            <li style={{float: "right"}}><Link to='/login'><button className='Nbut'>LOGIN</button></Link></li>
        </ul>
    </div>
  )
}
