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
        <div className="quoteCard h-32 flex flex-col justify-between border border-gray-200 rounded-xl mx-14 mt-7 p-4">
          <h1 className="scrollbar font-semibold h-22 text-xl overflow-scroll">{quote}</h1>
          <h1 className="flex justify-between items-center font-bold mt-1">
            <span>Quote By: <span className="text-emerald-400">{author}</span></span>
            <button onClick={copyFunction} className="btn bg-emerald-200 text-black w-20 hover:bg-emerald-300 p-1 rounded-md font-bold">{copy? "Copied!" : "Copy"}</button>
          </h1>
        </div>
    )
}