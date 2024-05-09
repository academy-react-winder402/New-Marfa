import React from 'react'

const ItemFilterNews = () => {
  return (
    <div  className='flex md:flex-row flex-col justify-center items-center md:items-start gap-8 md:gap-24 mx-auto my-3 w-[90%]'>
      <div className='mx-1 rounded-xl w-full md:w-[60%]'>
        <ul className='flex flex-row justify-between items-center border-2 border-blue-600 rounded-lg md:w-full h-14 text-balance text-sm md:text-nowrap md:text-lg'>
            <li className="flex flex-row justify-center items-center hover:bg-blue-600 p-2 rounded-sm w-[130px] h-[46px]"> همه</li>
            <li className="flex flex-row justify-center items-center hover:bg-blue-600 py-2 rounded-sm w-[140px] h-[46p">پربازدید ترین ها</li>
            <li className="flex flex-row justify-center items-center hover:bg-blue-600 py-2 rounded-sm w-[140px] h-[46p">جدید ترین ها</li>
            <li className="flex flex-row justify-center items-center hover:bg-blue-600 py-2 rounded-sm w-[140px] h-[46p">محبوب ترین ها</li>
        </ul>
      </div>
    
      <div className='flex justify-end items-center mb-3 w-96 md:w-[22%]'> 
        <form className='w-full h-10'>   
             <label for="search" className="mb-2 p-2 font-medium text-gray-900 text-sm dark:text-white sr-only">جستجو</label>
             <div className="relative border-violet-100 rounded-3xl md:rounded-2xl w-full">
             <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 ps-3">
                <svg className="ml-5 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" className="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-4 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full h-14 text-gray-900 text-sm dark:text-white ps-10 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="جستجو" required />
            
          </div>
          </form>
        </div>
     
    </div>
  )
}

export default ItemFilterNews
