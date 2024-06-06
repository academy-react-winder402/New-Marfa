import React, { useEffect } from 'react'
import { CoursesComponent } from '../../component/CourseComponent/CouecesMainPage/CoursesComponent'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0,0)
}, []);
  return (
    <div>
      <CoursesComponent/>
    </div>
  )
}

export default Courses
