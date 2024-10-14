import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";


export default async function Home() {
  
  // quotes api fetching 
  let quotes = await fetch('https://dummyjson.com/quotes') 
  quotes = await quotes.json()
  console.log("Quotes Data ==>",quotes);

  return (
    <>
     <Header/>
     <h1 className="flex justify-center gap-3 text-5xl font-bold mt-16 mb-10">Quotes <img width={'40px'} src={'https://cdn-icons-gif.flaticon.com/8801/8801107.gif'} /></h1>
    
      {quotes.quotes.map((data)=>{
        return(
           <QuoteCard key={data.id} author={data.author} quote={data.quote}/>
        )
      })}
    
      <Footer/>
     </>
  );
}
