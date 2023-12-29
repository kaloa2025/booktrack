import React, { useEffect,useState } from 'react'
import './CSS/NewMat.css'
import Book from './Book'

export default function NewMat() {

    const [bookcat,setbookCat]=useState([]);
    const [bookItem,setbookItem]=useState([]);
    const [userItem,setuserItem]=useState([]);

    const loadData = async()=>
    {
        try{
        let response=await fetch("http://localhost:5000/api/bookdata",
        {
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            }
        });
        response=await response.json();

        setbookItem(response[0]);
        setbookCat(response[1]);
        setuserItem(response[2]);
    }catch(error){console.error("Errorloading data",error);}
    };

    useEffect(()=>{
        loadData();
    },[])



  return (
    <div>
    {
        bookcat.length > 0 
        ? (bookcat.map((data)=>
        (
                <div className='nm' key={data.id}>
                <br/>
                <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>

                <p className='pnm'>{data.CategoryName}</p>

                <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>

                <p className='pitalic'>{data.Description}</p>

                    {bookItem.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:"center"}}>
                            {bookItem.filter((items) => items.CategoryName === data.CategoryName)
                            .map((filterItems) => 
                            (<div key={filterItems.id}>
                                {console.log(filterItems.name)}
                                <Book
                                bookit={filterItems}
                                userId={userItem.map((dat) => dat._id)}
                                ></Book>
                            </div>
                        ))}
                        </div>) : (  <div> No Such Data </div>
                    )}
                    
                <br/>
                <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>
                <br/>
                <p style={{color:"#84612B", fontSize:"smaller"}}>More Books in the Categories to be added soon !!</p>
                <br/>
                </div>
        ))
        ):""}
    </div>
  );
}        

        // <p className='pnm'>NON FICTION</p>
        // <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>
        
        // <p className='pitalic'>
        // "Expand your knowledge with our Non-Fiction collection. Explore a variety of real-world topics, from history and science to self-help and biographies. Discover and book insightful reads that provide valuable information and engage your curiosity. Dive into the world of facts and learning with a click at our online library."
        // </p>
        // <table>
        //     <tr>
        //         <td><Book/></td> 
        //         <td><Book/></td>   
        //     </tr>
        // </table>
        // <hr style={{width:"20%",textAlign:"center",borderColor:"#181818"}}></hr>
        // <br/>
        // <p style={{color:"#FFCF87",size:"xx-small"}}>More Books and Categories to be added soon!</p>
        // <br/>