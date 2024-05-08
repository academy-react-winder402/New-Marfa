
import Titelmenulist from "../../component/CourseComponent/Titelmenulist";

import Filtercourses from "../../component/CourseComponent/Filtercourses";
import Topheaderseconde from "../../component/CourseComponent/Topheaderseconde";
import { Cardcomponentcourses } from "../../component/CourseComponent/Cardcomponentcourses";

export const Courses = () => {

  return (
    
    <div className="bg-bluec w-full">
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
