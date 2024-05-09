import React from 'react'
import { Cardcomponentcourses } from '../CourseComponent/Cardcomponentcourses'

// component end order course
const OrderCourseComponent = () => {
  return (
    <div className='bg-[#D7D5FF] p-10 w-full'>
      <h2 className='m-10 text-[#3B3CA7] text-3xl'>دیگر دوره های ما:</h2>
      <Cardcomponentcourses/>
    </div>
  )
}

export default OrderCourseComponent
