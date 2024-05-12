import React from 'react'
import AllButton from '../../common/button/AllButton'
import student from '../../assets/image/SVG/student.svg'
import statos  from '../../assets/image/SVG/status.svg'
import datacours from '../../assets/image/SVG/datacours.svg'
import TeacherIntroducing from './TeacherIntroducing'


// left component detail course
const CourseDetailProudact = () => {
  return (
    <div className='flex flex-col justify-start items-center pt-16 rounded-lg md:w-full h-[950px]'>
      <div className='flex flex-col justify-start items-center bg-[#D7D5FF] shadow-bg-bluec shadow-xl pt-10 rounded-md w-[520px] md:w-[90%]'>
        <div className='flex justify-center items-center border-[#3D00B1]/20 border-b-2 w-[90%] h-16 text-[#210654]'><h1>مشخصات دوره</h1></div>
        <div className='flex flex-col justify-between items-center border-[#3D00B1]/20 border-b-2 divide-y divide-[#3D00B1]/20 w-[90%]'>
           <div className='flex flex-row justify-between items-center w-[100%] h-20'>
               <div className='flex items-center gap-2'>
                 <img src={student} alt="" />
                 <p className='text-[#03001C]/50'>تعداد دانشجو </p>
                </div>
                <h6 className='text-[#2C007F]'>28 </h6>
            </div> 
            <div className='flex flex-row justify-between items-center w-[100%] h-20 ny-3'>
              <div className='flex items-center gap-2'>
                 <img src={statos} alt="" />
                 <h6 className='text-[#03001C]/50'> وضعیت دوره</h6>
               </div>
                <h6 className='text-[#2C007F]'>در حال برگزاری </h6>
            </div>
            <div className='flex flex-row justify-between items-center w-[100%] h-20 ny-3'>
             <div className='flex items-center gap-2'>
                 <img src={datacours} alt="" />
                <h6 className='text-[#03001C]/50'>تاریخ شروع </h6>
                </div>
                <h6 className='text-[#2C007F]'>1403/01/25 </h6>
            </div>
            <div className='flex flex-row justify-between items-center w-[100%] h-20 bo ny-3'>
              <div className='flex items-center gap-2'>
                 <img src={datacours} alt="" />
                <h6 className='text-[#03001C]/50'>تاریخ  پایان</h6>
                </div>
                <h6 className='text-[#2C007F]'>1403/06/26 </h6>
            </div>
            
        </div> 
        <div className='mt-12 w-96 md:w-64 lg:w-72'><h5 className='flex justify-center items-center border-2 border-indigo-600 mt-5 rounded-lg h-16'>قیمت: 400000 تومان </h5></div>
        <div className='py-8 w-96 md:w-72 lg:w-96'> <AllButton title="ثبت نام در دوره"/></div>   
      </div>
    
      <div className='shadow-[#B48DFF4D] mt-10 md:w-'>
        <TeacherIntroducing />
      </div>
    </div>
  )
}

export default CourseDetailProudact
