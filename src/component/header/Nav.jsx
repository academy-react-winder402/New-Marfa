import { Link } from "react-router-dom"; 
import { Menu } from "./Menu";
import { Logo } from "./Logo";
import { Leftmenu } from "./Leftmenu";
export const Nav = () => {
  return (
    <>
      <div className="flex h-24 w-full flex-row items-center justify-start bg-violec">
        <div className="order-2 w-3/4 md:order-1 md:w-1/4">
        <Logo />
        </div>
        <div className="order-1 w-16 md:order-2 md:flex md:w-2/4 md:justify-center md:text-2xl">
         <Menu />  
        </div>
         <div className="order-3 w-1/3">
        <Leftmenu />
        </div>    
      </div>
      
    </>
  );
};
