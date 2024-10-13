import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  // this is api 
  // https://dummyjson.com/quotes

  return (
    <>
     <Header/>

     <h1 className="text-center text-4xl font-bold bg-slate-300 mt-10">Quotes</h1>
    
     <Footer/>
     </>
  );
}
