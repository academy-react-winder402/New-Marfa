import React from 'react'

 import { Tabs, rem } from '@mantine/core';
import DetailsTap1Component from './DetailsTap1Component';
import PreviewCourseComponent from './PreviewCourseComponent ';
import UserCommentComponent from './UserCommentComponent';


//  menu comment preview commentUsers
const CourseProudactMenuTabUL = () => {
 
const TabCours = ()=> {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs className='w-full text-xl' defaultValue="Detail">
      <Tabs.List className='flex justify-center md:justify-start border-[#B8B8FF] mx-auto px-2 pt-5 border-b-2 w-[95%] text-[#8765FF] text-nowrap'>
        <Tabs.Tab className='hover:bg-violet-400 focus:bg-[#8765FF] px-8 py-3 rounded-t-2xl hover:text-white focus:text-white' value="Detail" >
          توضیحات
        </Tabs.Tab>
        <Tabs.Tab className='hover:bg-violet-400 focus:bg-[#8765FF] mx-10 px-8 py-3 rounded-t-2xl hover:text-white focus:text-white' value="Preview" >
          پیش نمایش
        </Tabs.Tab>
        <Tabs.Tab className='hover:bg-violet-400 focus:bg-[#8765FF] px-8 py-3 rounded-t-2xl hover:text-white focus:text-white' value="UserComment">
          نظرات کاربران
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Detail">
        <DetailsTap1Component/>
      </Tabs.Panel>

      <Tabs.Panel value="Preview">
        <PreviewCourseComponent />
      </Tabs.Panel>

      <Tabs.Panel value="UserComment">
        <UserCommentComponent/>
      </Tabs.Panel>
    </Tabs>
  );
}
  return (
       <div className='border-[#B8B8FF] bg-[#D7D5FF] mx-auto px-5 border-b-2 w-[90%]'> 
      {/* ul for tabs */}
       {/* <ul className='flex justify-center md:justify-start items-center bg-[#D7D5FF] m-5 px-5'>
            <li className="hover:bg-blue-600 px-5 py-2 rounded-t-md w-[170px] h-[46p] text-center"><Link > توضیحات</Link></li>
            <li className="hover:bg-blue-600 px-5 py-2 rounded-t-md w-[170px] h-[46p] text-center"><Link > پیش نمایش ها</Link></li>
            <li className="hover:bg-blue-600 px-5 py-2 rounded-t-md w-[170px] h-[46p] text-center"><Link > نظرات کاربران</Link></li>
            </ul>  */}
            {/* <button className="bg-blue-500" onClick={x}>click me </button> */}
            {TabCours()}
        </div>
  )
}

export default CourseProudactMenuTabUL
