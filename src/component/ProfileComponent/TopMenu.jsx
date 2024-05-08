import { useState } from "react";
import LeftMenu from "./LeftMenu";
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"
const TopMenu = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav)
    }
    return ( 
        <>
            <div className="w-[90%] flex flex-row justify-between mx-auto">
               <div className="flex flex-row gap-4 items-center">
               <div className="" >
                <div onClick={handleNav} className="block lg:hidden">
                  {!nav ? <AiOutlineMenu className="cursor-pointer" size={30} /> : <AiOutlineClose size={30} className="z-[3] cursor-pointer" />  }
       
                    </div>
                    <div className={nav ? "fixed z-[1]  h-full text-end bg-opacity-80 top-[5rem] right-[5rem] rounded-lg ease-in-out duration-500 lg:hidden" : "fixed right-[-100%]"} >
                        <LeftMenu />
                    </div>  
                </div>
                <div>داشبورد</div>
               </div>
                
               <div className="flex flex-row gap-4">
               <div  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer hover:animate-[wiggle_1s_ease-in-out_infinite]  w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>

                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
               </div>
              
            </div>
            {/* <div className="w-[90%] h-[1px] bg-slate-400 mx-auto mb-10"></div> */}
        </>
     );
}
 
export default TopMenu;