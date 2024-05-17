import React from 'react'

 import TabCoursComponent from './TabCoursComponent';

//  menu tab control
const CourseProudactMenuTabUL = () => {
  return (
       <div className='border-[#B8B8FF] dark:border-2 dark:border-violet-800 bg-[#D7D5FF] dark:bg-violet-950 mx-auto px-5 border-b-2 w-[90%]'> 
         {TabCoursComponent()}
        </div>
  )
}

export default CourseProudactMenuTabUL
