import React from "react";
import { Cardcomponentcourses } from "../Cardcomponentcourses";
import Filtercourses from "../Filtercourses";
import Titelmenulist from "../Titelmenulist";
import Topheaderseconde from "../Topheaderseconde";

export const CoursesComponent = () => {

  return (
    
    <div className="z-50 bg-bluec w-full">
     <div className="bg-[#D7D5FF] shadow-2xl shadow-bg-bluec mx-auto max-w-[1920px]">
      
      <Topheaderseconde />
      <Titelmenulist/>
      <div className='flex flex-row flex-nowrap justify-center items-center mx-auto w-[90%] h-full'>
      <div  className="lg:inline-block flex hidden md:item-between md:mr-10 md:w-[20%]">
        <Filtercourses/>
        </div> 
      <div className="flex flex-row flex-wrap w-full md:w-[70%]">
        <Cardcomponentcourses/> 
        </div> 
      </div>

     </div>

    </div>
    
  );
};
