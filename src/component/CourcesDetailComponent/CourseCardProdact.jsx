import React from 'react'
import imagecours from './../../assets/image/3.jpg';
import { RatingStarComponent } from './RatingStarComponent';

// component star
 <RatingStarComponent/>

 const CourseCardProdact = () => {

   return (
   //  component right top course
   <div className="flex flex-col justify-center items-center dark:border-2 dark:border-violet-700 hover:bg-[#D7D5FF] dark:hover:bg-violet-800 dark:bg-violet-900 mx-auto mb-2 md:mb-10 rounded-md w-[520px] md:w-full">
     <div className="mx-auto my-5 px-8 rounded-t-lg md:rounded-none md:rounded-s-lg w-full h-auto">
      <object data="" type=""></object><img className="mx-auto rounded-t-lg object-cover"  src={imagecours} alt="" />
     </div>
     <div className='leading-8'>
        <div className="flex flex-col m-10 px-5">
           <div><h5 className="font-bold text-2xl text-indigo-900 md:text-3xl dark:text-white tracking-tight">آموزش رایگان html برای برنامه نویسان</h5></div> 
           <div><p className="mt-10 font-normal text-gray-700 text-xl lg:text-2xl dark:text-gray-400">محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه ی جاوااسکریپت</p></div>
           <div className='flex justify-start items-center gap-5 mt-8'>
               <div><h5 className="font-bold text-indigo-900 text-nowrap text-xl md:text-xl dark:text-white leading-3 tracking-tight">میزان رضایت مندی خود را نسبت به این دوره ثبت نمایید!</h5></div>
               <div><RatingStarComponent /></div>
            </div>
       
           <div><h5 className="mt-5 font-bold text-indigo-900 text-xl md:text-sm dark:text-white tracking-tight"> آیا از این دوره راضی بودید ؟    </h5></div>
        </div>
       
     </div> 
   </div> 
  
  )
}

export default CourseCardProdact
