import React from 'react'

import border from '../../../assets/image/Vector 34.png'
import Group from "../../../assets/image/Group 89.png"
import Grouplay from "../../../assets/image/Group.png" 
import data from "../../../assets/image/data.png"
import vector from "../../../assets/image/Vector.png"
import Minicategorycart from './Minicategorycart'

const CategoryCard = () => {
  const category = [
      {
      "title":"امنیت شبکه " ,
      "img": Group ,
      
      
  },
  {
      "title":"بازی   " ,
      "img": Grouplay ,
      },
  {
      "title":"وب دیزاین " ,
      "img": data ,
  },
  {
    "title":"تحلیل داده " ,
    "img": vector ,
}
]
  return (
    <>
    <div className='relative my-10 md:w-[95%]'>
      
      <div className="mb-3 flex flex-col items-center text-start text-lg">
              <span className="block w-36 text-2xl text-indigo-900"> دسته بندی  </span>
              <span className="block w-36 bg-gradient-to-l from-violet-900 to-transparent py-[2px]"></span>
      </div>
      <div className='absolute left-0 top-0 h-full w-full'>
        <img src={border} alt=""  className='w-100rem] object- h-full'/>
      </div>
      <div className='mt-10 flex w-[100%] flex-row flex-wrap items-center justify-center gap-5 p-5 md:flex-nowrap md:gap-16'>
          {category.map((category , index) => {
                  return (
                      <Minicategorycart title={category.title} image={category.img} />              
                  )
              })} 
      </div>
      
    </div>
   
     
    
  
    </>
  )
}

export default CategoryCard
