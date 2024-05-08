import React from 'react'
import SiteUserComponent from './SiteUserComponent'
import RerplayCommentUser from './RerplayCommentUser'
import comment from './../../assets/image/svg/comment.svg'
// comment all user

const AllUsersComment = () => {
  return (
    <div className='bg-[#D7D5FF] p-8 w-full'>    

      <div className='flex gap-5 border-[#3F40EA]/20 border-[#D7D5FF] mx-auto my-10 px-10 p-10 border-b-2 w-[90%] text-[#3B3CA7] text-lg md:text-2xl'>
       <img src={comment} alt="" />
         <p>نظرات کاربران در رابطه با این مقاله </p>
      </div>
      
       <div className='p-10' ><SiteUserComponent/></div> 
        <div className='flex flex-col bg-[#CFCEFF] mx-auto p-10 pb-5 rounded-3xl w-[95%]'>
          <SiteUserComponent/>
          <RerplayCommentUser/>
        </div>
        <div  className='p-10'><SiteUserComponent/> </div>
       
    </div>
    
  )
}

export default AllUsersComment
