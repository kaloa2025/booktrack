import React,{ useState, useEffect } from 'react'
import './CSS/NewMat.css'
import bm from './Images/bookmark.png'
import download from './Images/download.png'
import Tooltip from './DLTooltip'
import {useDispatchBook,useBook} from './ContextReducer'
import axios from 'axios'; 

export default function Book(props) {

    let data=useBook();
    let dispatch=useDispatchBook();
    const [bookmarks, setBookmarks] = useState([]);
    
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getbookmarks/${props.userId}`);
        setBookmarks(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    if (props.userId) {
      fetchBookmarks();
    }
  }, [props.userId]);
  

  const handleBookmark = async () => {
    try {
        if (!props.userId) {
            console.error('User ID is undefined.');
            return;
          }
      await axios.post('http://localhost:5000/api/addbookmark', {
        userId:JSON.stringify(props.userId),
        name: props.bookit.name,
        author: props.bookit.author,
        price: props.bookit.price,
      });

      console.log(data);
      if (props.onBookmarkAdded) {
        props.onBookmarkAdded(props.userId);
      }
    } catch (error) {
      console.error('Error handling bookmark:', error);
    }
  };

    const handledownload=async()=> {
        await dispatch({type:"ADD",id:props.bookit._id,name:props.bookit.name,author:props.bookit.author,price:props.bookit.price,download:props.bookit.download})
        await console.log(data)
    }

  return (
    <div>
        <img src={props.bookit.img} style={{width:"50%"}}/>
        <br/>
        <p className='bookname'>{props.bookit.name}</p>
        <p className='authorname'>{props.bookit.author}</p>
        <table className='bprice'>
            <tr>
                <td>
                    <Tooltip text="Read Later!"><button className='books-but' onClick={handleBookmark} ><img src={bm} className='books-logos'/></button></Tooltip>
                </td>
                <td>
                    <p style={{color:"#84612B"}}>RS {props.bookit.price} /-</p>
                </td>
                <td>
                    <Tooltip text="Download Index"><button className='books-but' onClick={handledownload}><img src={download} className='books-logos'/></button></Tooltip>
                </td>
            </tr>
        </table>
    </div>
  )
}

//<div><img src={book2} style={{width:"40%"}}/><br/><p className='bookname'>WELCOME TO JUNGLE</p><p className='authorname'>BY LAUREN BILLUPS</p><table className='bprice'><tr><td><button className='books-but'><img src={bm} className='books-logos'/></button></td><td><p>RS590/-</p></td><td><button className='books-but'><img src={cart} className='books-logos'/></button></td></tr></table></div>
//<td><div><img src={book3} style={{width:"40%"}}/><br/><p className='bookname'>THE MAJESTIES</p><p className='authorname'>BY TIFFANY TSAO</p><table className='bprice'><tr><td><button className='books-but'><img src={bm} className='books-logos'/></button></td><td><p>RS590/-</p></td><td><button className='books-but'><img src={cart} className='books-logos'/></button></td></tr></table></div></td>
//<td><div><img src={book4} style={{width:"40%"}}/><br/><p className='bookname'>THE ALCHEMIST</p><p className='authorname'>BY PANLO COELHO</p><table className='bprice'><tr><td><button className='books-but'><img src={bm} className='books-logos'/></button></td><td><p>RS590/-</p></td><td><button className='books-but'><img src={cart} className='books-logos'/></button></td></tr></table></div></td>
            