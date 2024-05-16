import React from 'react'
import professorpic from '../../../assets/image/professor.png'
import {
    RiTelegramLine,
    RiFacebookCircleFill,
    RiInstagramLine} from "react-icons/ri"
  import { TfiTwitter } from "react-icons/tfi";
  import { IoLogoLinkedin } from "react-icons/io5";

const ProfessorCard = () => {
  return (
  
   <div className='flex md:flex-row flex-col justify-center items-center mx-auto mt-20 py-10 md:w-[80%] group'>
     <div className='relative flex justify-start items-center bg-gradient-to-l from-[#6B3FEA] dark:from-violet-900 to-[#7070FF] dark:to-violet-700 shadow-lg mx-auto rounded-lg w-96 md:w-[90%] h-56 md:h-64'>
     
           <div className='-top-20 left-32 absolute mx-auto w-[40%] ]'>
             <img src={professorpic} alt=""
              className="border--4 border-white rounded-full transform transition-transform duration-400 hover:scale-110" /> 
           </div>
       
     
      <div className="mt-8 ml-20 p-5 w-full md:w-[80%] text-nowrap text-start text-white"> 
           <div className='flex flex-col w-full'>
              <h3 className="w-full font-semibold text-xl">مدرس مارفا تک تیک</h3> 
              <span className="my-5 text-sm"> 
                مدرس دوره ری اکت
              </span>
              <span className="w-full text-sm"> 
              تعداد دروس ارائه شده با استاد: 12
            </span> 
           </div> 
      </div> 
       
      <div className='relative flex flex-col items-center gap-12 w-14 text-white duration-500 ease-in-out'>
          <div  className='group-hover:visible -top-28 md:-top-32 left-5 absolute bg-indigo-700 mx-auto p-5 rounded-b-lg invisible'>
              <RiInstagramLine  size={30}/>
              <IoLogoLinkedin className='my-3' size={30}/>
              <RiTelegramLine size={30} /> 
                  
          </div>
      </div>
    </div> 
   </div>
  
  )
}

export default ProfessorCard
