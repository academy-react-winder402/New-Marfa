import { Link } from "react-router-dom";
const RegisterIcon = () => {
    return (  
        <div className="flex flex-row-reverse justify-between mx-3 items-center">
            <div className="w-3/3">
            <ul className="flex flex-row items-center">
                   
                <li className="p-2 ">
                     <Link>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" className="text-[#6359f0] w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                     </svg>
                     </Link>
                </li>
    
                <li className="p-2">
                    <Link to='/'>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" className="text-[#6359f0] w-6 h-6 dark:stroke-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </li>
             </ul>
            </div>
            <div className="items-center w-1/3">
               <Link className="text-[#6359f0] flex flex-row gap-3" to='/login'>
                 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" className="text-[#6359f0] h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
                ورود به سایت
               </Link>
            </div>
        </div>
    );
}

export default RegisterIcon;