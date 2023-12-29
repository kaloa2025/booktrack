import React from 'react'
import Nav from '../components/Nav'
import './CSS/Register.css'
import Reg from '../components/Reg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
export default function Register() {
  return (
    <div className='R-body'>
        <Nav/>
        <Reg/>
    </div>
  )
}
