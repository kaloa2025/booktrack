import React from 'react'
import Nav from '../components/Nav'
import './CSS/PreLog.css'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
export default function PreLog() {
  return (
    <div className="PLbody">
        <Nav/>
        <Intro/>
    </div>
  )
}
