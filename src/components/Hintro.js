import React from 'react'
import './CSS/Hintro.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Hintro() {
  const scrollToExplore = () => {
    scroll.scrollTo('exploreSection', { smooth: true });
  };
  return (
    <div className='Hintro-container'>
    <div className='Hintro-square'>
      <p className='p-HIquote'>DISCOVER<br/>YOUR<br/>ROOTS</p>
      <p className='p-HItagline'>Online Learning  Anytime, Anywhere!</p>
      <div className='p-HIlist'><ul><li><ScrollLink to="exploreSection" smooth={true} duration={2500}><button className='p-HIbut1'>EXPLORE</button></ScrollLink></li></ul></div>
    </div>
</div>
  )
}
