import './CSS/Search.css'
import React, { useEffect,useState } from 'react'
import Book from './Book'

export default function Search() {
  return (
    <div className='search'>
        <p className='sp'>LOOKING FOR A BOOK ?</p>
        <table className='sul'>
            <tr><td><input type='text' className='ip'></input></td></tr>
            <tr><td><button className='sbut'>SEARCH</button></td></tr>
        </table>
      </div>
  )
}
