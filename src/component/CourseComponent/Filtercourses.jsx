import React from "react";
import Checboxcourscomponent from "./Checboxcourscomponent";
import { useSelector } from "react-redux";
import {CustomGetUseQueryExtra} from '../customHook/CustomGetUseQueryExtra'

const Filtercourses = ({setCourseLevel}) => {
  const setFiltershow = useSelector(state=>state.setFiltershow.setFiltershow)

  const show = setFiltershow ? `visible` : `invisible`

  
  const {data} = CustomGetUseQueryExtra('lvlList', '/CourseType/GetCourseTypes')
  
  return (
    <>
      <div className={`lg:block flex justify-start items-center md:w-full md:text-2xl id="navbar-default ${show}`} aria-hidden="true"> 
        <div className="leading-10">
        <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-violet-700 bg-violet-100 md:bg-white md:dark:bg-violet-900 dark:bg-violet-900 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
          {data?.map(item=>{
            return(
                <div key={item.id}>
                  <input id={item.id} name="level" type="radio" value={item.id} onChange={(e)=>setCourseLevel(e.target.value)}/>
                  <label htmlFor={item.id}>{item.typeName}</label>
                </div>
            )
          })}


        </div>

            {/* filter  topic */}
            <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-violet-700 bg-violet-100 md:bg-white md:dark:bg-violet-900 dark:bg-violet-900 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
  
              <p className="m-3 p-2 border-b-[1px] border-blue-200 text-violec dark:text-violet-200">
                بر اساس موضوع
              </p>
              <Checboxcourscomponent titel='برنامه نویسی وب'/>
              <Checboxcourscomponent titel='Android'/>
              <Checboxcourscomponent titel='React'/>
              <Checboxcourscomponent titel='Bootstrap'/>
              <Checboxcourscomponent titel='Ruby'/>
              <Checboxcourscomponent titel='TypeScript'/>
              <Checboxcourscomponent titel='Sas'/>
              <Checboxcourscomponent titel='BootStrap'/>
              <Checboxcourscomponent titel='TailwindCss'/>
              <Checboxcourscomponent titel='Python'/>
          
            </div>
            {/* filter  price */}

            <div className="bg-gray-100 dark:bg-violet-900 my-6 p-5 rounded-lg dark:text-violet-200">
              <p> بر اساس قیمت</p>
              <Checboxcourscomponent titel='خریدنی'/>
              <Checboxcourscomponent titel='رایگان'/>
              <Checboxcourscomponent titel='همه'/>

            </div>
            {/* filter  time */}

            <div className="bg-gray-100 dark:bg-violet-900 mb-5 p-3 rounded-lg dark:text-violet-200">
              <p> بر اساس مدت زمان دوره</p>

              <Checboxcourscomponent titel='یک ماه'/>
              <Checboxcourscomponent titel='دو ماه'/>

              </div>
        </div>
        
      </div>
    </>
  );
};

export default Filtercourses;
