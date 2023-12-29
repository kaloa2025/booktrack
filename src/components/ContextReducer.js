import React, { createContext, useContext, useReducer } from 'react'

const BookStateContext =createContext();
const BookDispatchContext =createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{
                id: action.id,
                bookname:action.name,authorname:action.author,bookprice:action.price}]
                case "REMOVE":
                    let newArr=[...state]
                    newArr.splice(action.index,1)
                    return newArr;
            default:
                console.log("Error in Reducer");
    }
}

export const BookProvider =({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
        <BookDispatchContext.Provider value={dispatch}>
            <BookStateContext.Provider value={state}>
                {children}
            </BookStateContext.Provider>
        </BookDispatchContext.Provider>
    )
}

export const useBook =() =>useContext(BookStateContext)
export const useDispatchBook=()=>useContext(BookDispatchContext)