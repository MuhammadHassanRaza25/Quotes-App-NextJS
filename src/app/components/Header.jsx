import Link from "next/link";

export default function Header(){
    return(
        <div className="nav flex justify-between items-center px-10 py-4 bg-emerald-200">
            <div className="font-bold text-3xl navHeading">Quotes App</div>

            <div className="btnDiv flex justify-between gap-5">  
                <Link href={'https://github.com/MuhammadHassanRaza25'} target="_blank">
                  {/* <img width={'40px'} src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/>    */}
                  <button className="btn navBtn hover:bg-white hover:text-black bg-black text-white w-28 p-1 rounded-md font-bold text-xl">Github</button>
                </Link>
                <Link href={'https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/'} target="_blank">
                  <button className="btn navBtn hover:bg-white hover:text-blue-600 bg-blue-600 text-white w-28 p-1 rounded-md font-bold text-xl">LinkedIn</button>
                </Link>
            </div>
        </div>
    )
}