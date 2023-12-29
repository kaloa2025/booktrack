import React from 'react'
import './CSS/HomeNav.css'
import logo from './Images/logo.png'
import bm from './Images/bookmark.png'
import download from './Images/download.png'
import home from './Images/home.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function HomeNav() {
  return (
    <div className='hnav'>
        <ul>
            <li className='hn-logo-li'><img src={logo} style={{width:"50%"}}></img></li>
            <li style={{float: "right"}} className='hn-li'><Link to='/home'><button className='Nbut'><img src={home} style={{width:"50%"}}></img></button></Link></li>
            <li style={{float: "right"}} className='hn-li'><Link to='/download'><button className='Nbut'><img src={download} style={{width:"50%"}}></img></button></Link></li>
            <li style={{float: "right"}} className='hn-li'><Link to='/bookmarks'><button className='Nbut'><img src={bm} style={{width:"50%"}}></img></button></Link></li>            
            {/* <li style="float:right"><a class="active" href="#about">About</a></li> */}
        </ul>
    </div>
  )
}
