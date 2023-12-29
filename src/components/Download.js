import React from 'react'
import './CSS/Bookmark.css'
import { Link } from 'react-router-dom'
import delet from './Images/delete.png'
import down from './Images/download.png'
import {useBook,useDispatchBook} from './ContextReducer'

export default function Download() {
  let data=useBook();
  let dispatch=useDispatchBook();
  if(data.length===0)
  {
    return(
      <div className='empty'>
        <div className='ebox'>
          NOTHING IN YOUR LIST!
          <br/>
          <Link to='/home'>
            <button className='ebut'>Explore</button>
          </Link>
        </div>
      </div>)
  }
  const handleredirect = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className='bookmark'>
      <div className='login-container'>
        <div className='login-square'>
        <table>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Author Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Download</th>
                  <th scope='col'></th>
                </tr>
                </thead>
                <tbody>
                  <tr></tr>
                  <tr></tr>
                  {data.map((book,index)=>(
                    <tr>
                      <td scope='row'>{index+1}</td>
                      <td>{book.bookname}</td>
                      <td>{book.authorname}</td>
                      <td>{book.bookprice}</td>
                      <td><button  className='bbutb'><img src={down} className='bbtubimg' onClick={()=>handleredirect(book.download)}></img></button></td>
                      <td><button  className='bbutb'><img src={delet} className='bbtubimg' onClick={()=>{dispatch({type:"REMOVE",index:index})}}></img></button></td>
                    </tr>
                  ))}
                </tbody>
            </table>  
            <Link to='/home'>
            <button className='ebut2'>More</button>
          </Link>  
        </div>
    </div>
    </div>
  )
}
