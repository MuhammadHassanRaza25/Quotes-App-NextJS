"use client"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({error, reset}){
    useEffect(()=>{
       console.log('error==>', error);   
    },[error]) //error hamne page.js ki condition main dia dia hai.

    return(
        <>
        <Header/>
        
          <div className="h-[81.5vh] flex flex-col gap-7 justify-center items-center">
            <Image src={require('./assets/errorimg.png')} height={200} width={200} alt="error image"/>
            <h1 className="errHeading text-3xl font-bold text-center">{error.message}</h1>
             <div>
               <button onClick={()=> reset()} className="errBtn btn bg-emerald-400 text-white hover:bg-emerald-600 w-[100%] p-1.5 px-5 rounded-md font-bold text-xl">Try again</button>
             </div>
          </div>

        <Footer/>
        </>
    )
}