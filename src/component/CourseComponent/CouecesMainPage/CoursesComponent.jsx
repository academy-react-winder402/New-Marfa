import React, { useState } from "react";
import { Cardcomponentcourses } from "../Cardcomponentcourses";
import Filtercourses from "../Filtercourses";
import Titelmenulist from "../Titelmenulist";
import Topheaderseconde from "../Topheaderseconde";
import { useSelector } from 'react-redux';
// import News from "../../LandingComponent/News/News";
import CardNews from "../../LandingComponent/News/CardNews";

export const CoursesComponent = () => {
  const setFiltershow = useSelector(state=>state.setFiltershow.setFiltershow)
  const [showType , setShowType] = useState(true)
  // const showType = useSelector(state=>state.showType)
  const show = setFiltershow ? `w-[20%]` : `w-0`
  const cardWidth = setFiltershow ? `md:w-[70%]` : `md:w-[100%]`

  return (
    
    <div className="z-50 bg-bluec w-full">
     <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
      
      <Topheaderseconde />
      <Titelmenulist showType={showType} setShowType={setShowType}/>
      <div className='flex flex-row flex-nowrap justify-center items-center mx-auto w-[90%] h-full'>
      <div  className={`lg:inline-block flex md:item-between md:mr-10 ${show}`}>
        <Filtercourses/>
        </div> 
      {showType ?  <div className={`flex flex-row flex-wrap w-full ${cardWidth} `}>
      <Cardcomponentcourses/> 
      </div> : <CardNews/>} 

     
      </div>

     </div>

    </div>
    
  );
};
