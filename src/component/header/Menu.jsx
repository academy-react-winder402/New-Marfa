
import {Link} from "react-router-dom"
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";
export const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
return (

  <div className="flex justify-start items-center px-4 max-w-[1240px] h-24 text-nowrap text-white">
    
    <ul className="hidden md:flex md:flex-row md:flex-grow md:items-center">
      <li className="p-4"><Link to="/"> صفحه اصلی</Link></li>
      <li className="p-4"><Link to="/">دوره ها</Link></li>
      <li className="p-4"><Link to="/">اساتید</Link></li>
      <li className="p-4"><Link to="/">اخبار</Link></li>
      <li className="p-4"><Link to="/">ارتباط با ما</Link></li>
    </ul>
    <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu className="cursor-pointer" size={20} /> : <AiOutlineClose size={20} className="z-[3] cursor-pointer" />  }
       
    </div>
    <div className={nav ? "fixed z-[1] h-64 text-end bg-opacity-80 top-11 right-11 bg-violec rounded-lg  w-[30%] ease-in-out duration-500" : "fixed right-[-100%]"} >
    <ul className="p-4">
      <li className="p-4 hover:shadow-lg"><Link to="/course">دوره ها</Link></li>
      <li className="p-4 hover:shadow-lg"><Link to="/professor">اساتید</Link></li>
      <li className="p-4 hover:shadow-lg"><Link to="/contactus">ارتباط با ما</Link></li>
      <li className="p-4 hover:shadow-lg"><Link to="/news">اخبار</Link></li>
    </ul>
    </div>
  </div>

  // ************************

    );
  };
  
  {/* <div className="flex sm:flex-row-reverse flex-col-reverse flex-grow+ items-center gap-4 font-8">


<div className="absolute inset-0">
  <Link to="/course">دوره ها</Link>
</div>
<div>
  <Link to="/professor">اساتید</Link>
</div>
<div>
  <Link to="/contactus">ارتباط با ما</Link>
</div>
<div>
  <Link to="/news"> اخبار </Link>
</div>
</div> */}

