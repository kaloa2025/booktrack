import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import HomeNav from '../components/HomeNav'
import './CSS/Home.css'
import Hintro from '../components/Hintro'
import Search from '../components/Search'
import NewMat from '../components/NewMat'
import Explore from '../components/Explore'
import Books from '../components/Books'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


export default function Home() {

  return (
    <div className='home'>
        <HomeNav/>
        <Hintro/>
        <Search/>
        <NewMat/>
        <Explore/>
        <Books/>
        <Footer/>
    </div>
  )
}
