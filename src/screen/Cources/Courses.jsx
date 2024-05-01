
import { Cardcomponentcourses } from "../../component/CourseComponent/Cardcomponentcourses";
import Filtercourses from "../../component/CourseComponent/Filtercourses";
import Titelmenulist from "../../component/CourseComponent/Titelmenulist";
import Topheaderseconde from "../../component/CourseComponent/Topheaderseconde";

const Courses = () => {
    return (
        <>
        <div className="bg-bluec w-full">
        <Topheaderseconde  />
        <Titelmenulist/>
        <div className='flex flex-row flex-nowrap justify-center items-center w-full h-full'>
             <div  className="lg:inline-block flex hidden md:item-between md:mr-10 md:w-[25%]">
                 <Filtercourses />
             </div> 
             <div className="flex flex-row flex-wrap w-full md:w-[75%]">
                <Cardcomponentcourses /> 
             </div> 
        </div>
        </div>
        
        </>
      );
}
 
export default Courses;