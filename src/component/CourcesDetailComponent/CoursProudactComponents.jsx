import React from "react";
import CourseDetailProudact from "./CourseDetailProudact";
import CourseCardProdact from "./CourseCardProdact";


//top component all component pruducts cource
const CoursProudactComponents = () => {
  return (
    
    <div className="bg-[#D7D5FF] w-full">
        <div className='md:w[95%] flex md:flex-row flex-col justify-center items-center mx-auto w-[90%]'>
              {/* component course detal right */}
            <div className='w-full md:w-[50%] lg:w-[65%]'>
                <CourseCardProdact/>
            </div> 
            {/* component course detal left */}
            <div className='w-full md:w-[50%] lg:w-[35%]'>
            <CourseDetailProudact/>
            </div>
        </div>  
    </div>
  )
}

export default CoursProudactComponents
