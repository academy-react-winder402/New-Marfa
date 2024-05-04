import React from 'react'

import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { RxTextAlignCenter } from "react-icons/rx";


const Titelmenulist = () => {
  return (
    <div className=''>
      <div className='m-12 flex flex-row flex-wrap items-center justify-center gap-8 px-5 md:m-20 md:flex-row lg:flex-nowrap'>
        <div className='float-right flex h-14 w-48 flex-row items-center justify-center gap-2 text-nowrap rounded-2xl border-4 border-violet-100 pr-1 text-lg hover:bg-gray-50 md:w-52 md:gap-2 md:rounded-2xl md:text-sm'>
        <span > فیلتر ها</span>
        <RxTextAlignCenter size={40}/>
        </div>
        <div className='flex h-14 w-48 flex-row items-center justify-center rounded-2xl border-4 border-violet-100 md:w-64 md:gap-2 md:rounded-2xl'>
            <div className='flex h-[100%] w-[100%] items-center justify-center rounded-xl hover:bg-gray-50'><CiCircleList size={40}/> </div> 
            <div className='flex h-[100%] w-[100%] items-center justify-center rounded-xl hover:bg-gray-50'><BsGrid3X3GapFill size={40}/></div>
            
        </div>
        
        <div className='h-12 w-full'> 
        <form>   
             <label for="search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">جستجو</label>
          <div class="relative rounded-3xl border-violet-100 md:rounded-2xl">
             <div class="pointer-events-none absolute inset-y-0 end-0 flex items-center ps-3">
                <svg class="ml-5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" class="block h-14 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="جستجو" required />
            
          </div>
          </form>
        </div>
        <div className='float-left h-14 w-72 lg:w-96'>
            <button type="button" className="flex w-full items-center justify-between gap-3 text-nowrap rounded-2xl border-b border-violet-100 bg-gray-50 px-5 py-5 font-medium text-gray-500 md:w-full rtl:text-right dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
              <span>دسته بندی ها</span>
              <svg data-accordion-icon className="h-3 w-4 shrink-0 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
        </div>
        <div className='h-14 w-52'>
            <button type="button" className="flex w-full items-center justify-between gap-3 rounded-2xl border-b border-gray-200 border-violet-100 bg-gray-50 px-5 py-5 font-medium text-gray-500 rtl:text-right dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span> صعودی </span>
            <svg data-accordion-icon className="h-3 w-4 shrink-0 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Titelmenulist
