import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";

export default async function Home() {
  // quotes api fetching 
  let quotes = await fetch('https://dummyjson.com/quotes', {cache:"no-cache"}) //no-cache se nextjs data cache nhi karega.
  
  //error condition for error.js page
  if(!quotes.ok){
    throw new Error("API is not working!");
  } 
  //means agar ok true hoga to api sahi run hogi. hamne condition lagai ke agar ok false hai to hamny error de dia or error.js main get karlia.

  quotes = await quotes.json()
  // console.log("Quotes Data ==>",quotes);
  

  return (
    <>
     <Header/>
     <h1 className="flex justify-center gap-3 text-5xl font-bold mt-16 mb-10">Quotes <img width={'40px'} src={'https://cdn-icons-gif.flaticon.com/8801/8801107.gif'} /></h1>
    
      {quotes.quotes.map((data)=>{
        return(
           <QuoteCard key={data.id} author={data.author} quote={data.quote}/>
        )
      })}
    
      <div className="mt-12">
         <Footer/>
      </div>
     </>
  );
}
