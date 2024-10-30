import Link from "next/link";

export default function Footer(){
    return(
        <div className="p-3 border-t-2 border-gray-200 bg-gray-50 flex justify-center">
           <Link href={'https://github.com/MuhammadHassanRaza25'} target="_blank"><h1 className="font-bold">Made By Muhammad Hassan Raza 💻😊</h1></Link> 
        </div>
    )
}