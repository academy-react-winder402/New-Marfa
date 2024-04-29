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
    <>
   <div className='group relative mx-auto mt-20 flex flex-col items-center justify-center py-10 md:w-[80%] md:flex-row lg:w-full'>
     <div className='mb-6 flex h-56 w-96 items-center rounded-lg bg-violet-500 shadow-lg md:h-64 md:w-[90%]'>
     
           <div className=''>
             <img src={professorpic} alt=""
              className="border--4 duration-400 absolute -top-10 right-24 z-10 mx-auto block transform rounded-full border-white text-center transition-transform hover:scale-110 md:right-28 lg:right-32" /> 
           </div>
       
     
      <div className="m-10 mt-20 text-nowrap text-start text-white md:w-[80%]"> 
           <div className='flex w-full flex-col'>
              <h3 className="w-full text-xl font-semibold">مدرس مارفا تک تیک</h3> 
              <span className="my-5 text-sm"> 
                مدرس دوره ری اکت
              </span>
              <span className="w-full text-sm"> 
              تعداد دروس ارائه شده با استاد: 12
            </span> 
           </div> 
      </div> 
       
      <div className='absolute flex w-14 flex-col items-center gap-12 text-white duration-500 ease-in-out'>
          <div  className='invisible absolute -top-28 right-72 mx-auto rounded-b-lg bg-indigo-700 p-5 group-hover:visible md:-top-32 md:right-96 lg:right-[20rem]'>
              <RiInstagramLine  size={30}/>
              <IoLogoLinkedin className='my-3' size={30}/>
              <RiTelegramLine size={30} /> 
                  
          </div>
      </div>
    </div> 
   </div>
   </>
  )
}

export default ProfessorCard
