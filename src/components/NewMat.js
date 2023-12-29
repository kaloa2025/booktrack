import React from 'react'
import './CSS/NewMat.css'
import book1 from './Images/book1.png'
import book2 from './Images/book2.png'
import book3 from './Images/book3.png'
import book4 from './Images/book4.png'
import genre1 from './Images/fiction.png'
import genre2 from './Images/nonfiction.png'
export default function NewMat() {
  return (
    <div className='nm'>
        <p className='pnm'>NEW MATERIALS</p>
        <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>
        <table>
            <tr>
                <td><div><img src={book1} style={{width:"80%"}}/><br/><p className='bookname'>CITY OF ORANGE</p><p className='authorname'>BY DAVID YOON</p></div></td>
                <td><div><img src={book2} style={{width:"80%"}}/><br/><p className='bookname'>WELCOME TO JUNGLE</p><p className='authorname'>BY LAUREN BILLUPS</p></div></td>
                <td><div><img src={book3} style={{width:"80%"}}/><br/><p className='bookname'>THE MAJESTIES</p><p className='authorname'>BY TIFFANY TSAO</p></div></td>
                <td><div><img src={book4} style={{width:"80%"}}/><br/><p className='bookname'>THE ALCHEMIST</p><p className='authorname'>BY PANLO COELHO</p></div></td>
            </tr>
        </table>
        <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>

        <p className='pnm'>OUR CATEGORIES</p>
        <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>
        <table>
            <tr>
                <td><div><img src={genre1} style={{width:"40%"}}/><br/><p className='authorname'>FANTASY</p></div></td>
                <td><div><img src={genre2} style={{width:"40%"}}/><br/><p className='authorname'>NON FICTION</p></div></td>
            </tr>
        </table>
        <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>
        <p style={{color:"#FFCF87",size:"xx-small"}}>More to be added soon!</p>
    </div>
  )
}
