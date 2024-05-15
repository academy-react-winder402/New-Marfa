import { Button } from 'flowbite-react';
import React from 'react'

import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { RxTextAlignCenter } from "react-icons/rx";


const Titelmenulist = () => {
  return (
    
      <div className='flex flex-row md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-8 m-12 mx-auto px-12 w-[85%]'>
        <div  className='float-right flex flex-row justify-center items-center gap-2 md:gap-2 border-4 border-violet-100 hover:bg-gray-50 pr-1 rounded-2xl md:rounded-2xl w-48 md:w-52 h-14 text-lg focus:outline-none focus:ring-2 text-nowrap md:text-sm'>
        <span > فیلتر ها</span>
        <RxTextAlignCenter size={40}/> 
        </div>
        <div className='flex flex-row justify-center items-center md:gap-2 border-4 border-violet-100 rounded-2xl md:rounded-2xl w-48 md:w-64 h-14'>
            <div className='flex justify-center items-center hover:bg-gray-50 rounded-xl w-[100%] h-[100%]'><CiCircleList size={40}/> </div> 
            <div className='flex justify-center items-center hover:bg-gray-50 rounded-xl w-[100%] h-[100%]'><BsGrid3X3GapFill size={40}/></div>
            
        </div>
        
        <div className='w-[70%] h-12'> 
        <form>   
             <label for="search" class="mb-2 font-medium text-gray-900 text-sm dark:text-white sr-only">جستجو</label>
          <div class="relative border-violet-100 rounded-3xl md:rounded-2xl">
             <div class="absolute inset-y-0 flex items-center pointer-events-none end-0 ps-3">
                <svg class="ml-5 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" class="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-4 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full h-14 text-gray-900 text-sm dark:text-white ps-10 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="جستجو" required />
            
          </div>
          </form>
        
        </div>
        {/* start acardeon1 */}
        <div id="accordion-open" data-accordion="open">
          <div className='float-left w-52 lg:w-96'  id="accordion-open-heading-1">
            <button type="button" className="rtl:text-right flex justify-between items-center gap-3 border-violet-100 dark:border-gray-700 bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 px-5 py-5 p-5 border border-b rounded-2xl rounded-t-xl w-full md:w-full h-14 font-medium text-gray-500 text-nowrap dark:text-gray-400 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
              <span>دسته بندی ها</span>
              <svg data-accordion-icon className="w-4 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </div>
          <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
            <div className="border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-5 border border-b-0">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              
            </div>
          </div>
        </div>

        
       {/* end acardion 1 */}
        <div className='w-52'>
            <button type="button" className="rtl:text-right flex justify-between items-center gap-3 border-gray-200 border-violet-100 dark:border-gray-700 bg-gray-50 px-5 py-5 border-b rounded-2xl w-full h-14 font-medium text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span> صعودی </span>
            <svg data-accordion-icon className="w-4 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </div>
      </div>
  
  )
}

export default Titelmenulist
