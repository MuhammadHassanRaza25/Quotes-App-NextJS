import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function NotFound(){
    return(
        <>
        <Header/>
        
          <div className="h-[81.5vh] flex flex-col gap-7 justify-center items-center">
            <Image src={require('./assets/notfoundimg.png')} height={200} width={200} alt="not found image"/>
            <h1 className="errHeading text-3xl font-bold text-center">Sorry this page is not found 🙁</h1>
            <Link href={'/'}>
               <button className="errBtn btn bg-emerald-400 text-white hover:bg-emerald-600 w-[100%] p-2 px-5 rounded-md font-bold text-xl">See Available Quotes</button>
            </Link>
          </div>

        <Footer/>
        </>
    )
}