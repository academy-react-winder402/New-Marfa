import React from 'react'
import { Cardcomponentcourses } from '../CourseComponent/Cardcomponentcourses'

// component end order course
const OrderCourseComponent = () => {
  return (
    <div className='dark:border-violet-800 dark:border-2 bg-[#D7D5FF] dark:bg-violet-950 mx-auto mt-10 py-10 w-[90%]'>
      <h2 className='m-10 text-[#3B3CA7] text-3xl dark:text-violet-200'>دیگر دوره های ما:</h2>
      <Cardcomponentcourses/>
    </div>
  )
}

export default OrderCourseComponent
