import React from 'react'
import './CSS/Intro.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function Intro() {
  return (
    <div className='intro-container'>
        <div className='intro-square'>
            <p className='p-tagline'>Online Learning  Anytime, Anywhere!</p>
            <p className='p-quote'>DISCOVER YOUR ROOTS</p>
            <p className='p-intro'>Unlock the world of books your digital gateway to endless stories and knowledge! Experience the convenience of online book booking and purchases. Join us today for a literary adventure like never before. Sign up now and embark on a journey of discovery! Happy reading!</p>
            <div className='p-list'><ul><li><Link to='/login'><button className='p-but1'>PURCHASE</button></Link></li><li><Link to='/register'><button className='p-but2'>REGISTER</button></Link></li></ul></div>
        </div>
    </div>
  )
}
