import React from "react";
import Checboxcourscomponent from "./Checboxcourscomponent";

const Filtercourses = () => {
  return (
     <div className='lg:block flex justify-start items-center md:w-full md:text-2xl id="navbar-default' aria-hidden="true"> 
        <div className="leading-10">

            {/* filter  topic */}
            <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-gray-700 bg-gray-100 md:bg-white md:dark:bg-gray-900 dark:bg-gray-800 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
  
              <p className="m-3 p-2 border-b-[1px] border-blue-200 text-violec">

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

            <div className="bg-gray-100 my-6 p-5 rounded-lg">
              <p> بر اساس قیمت</p>
              <Checboxcourscomponent titel='خریدنی'/>
              <Checboxcourscomponent titel='رایگان'/>
              <Checboxcourscomponent titel='همه'/>

            </div>
            {/* filter  time */}

            <div className="bg-gray-100 mb-5 p-3 rounded-lg">
              <p> بر اساس مدت زمان دوره</p>

              <Checboxcourscomponent titel='یک ماه'/>
              <Checboxcourscomponent titel='دو ماه'/>

              </div>
        </div>
        
      </div>
  );
};

export default Filtercourses;
