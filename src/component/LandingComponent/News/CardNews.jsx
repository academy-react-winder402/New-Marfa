import React from 'react'


const CardNews = ({image}) => {
  return (
   <>
     
     <div className="m-5 mb-10 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <div className="my-5 h-96 w-full rounded-t-lg px-8 md:h-auto md:rounded-none md:rounded-s-lg">
          <img className="mx-auto w-[80%] object-cover md:w-[100%]" src={image} alt="" />
         </div>
         <div className='leading-8'>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-indigo-900 md:text-[15px] dark:text-white"> چگونه برنامه نویسی را آسان تر یاد بگیریم؟</h5>
                <p className="m-8 mt-10 text-start font-normal text-gray-700 dark:text-gray-400">دوره های آنلاین انعطاف  پدیری بیشتری را در برنامه ریزی روز خود و کار در کنار خانواده امکان پدیر می سازد.</p>
            </div>
            <div className='mx-5 mb-10 text-end'>
            <a href="#" className="ml-20 rounded-lg py-3 align-bottom text-sm font-medium text-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:items-center md:text-start dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ادامه مطلب
              <svg className="absolute left-32 -mt-3 h-3 w-3 rotate-180 transform text-left md:left-40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            </div>
         </div>
      </div> 
   </>
  ) 
  }  





export default CardNews
