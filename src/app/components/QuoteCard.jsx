"use client"
import { useEffect, useState } from "react"

export default function QuoteCard({author, quote, key}){
    
  const [copy, setCopy]= useState("")
  //console.log(copy);
  let copyFunction = ()=>{
    navigator.clipboard.writeText(quote)  //iski help se copy ho rha h.
    setCopy(quote)
  }
  useEffect(()=>{copyFunction},[copy])

    
    return(
        <div className="quoteCard w-[70%] mx-auto flex flex-col justify-between border border-gray-200 rounded-xl mt-7 p-4">
          <h1 className="font-semibold text-xl">{quote}</h1>
          <h1 className="cardFooter flex items-center justify-between font-bold mt-1">
            <span>Quote By: <span className="text-emerald-400">{author}</span></span>
             <span>
               <button onClick={copyFunction} className="btn bg-emerald-200 text-black w-20 hover:bg-emerald-300 p-1 rounded-md font-bold">{copy? "Copied!" : "Copy"}</button>
             </span>
          </h1>
        </div>
    )
}