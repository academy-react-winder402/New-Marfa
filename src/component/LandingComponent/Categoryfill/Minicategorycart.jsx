import React from 'react'

const Minicategorycart = ({title,image}) => {
  return (
    <>
      
        <div className='md:[20%] z-50 h-52 w-[45%] rounded-2xl rounded-bl-[5rem] bg-violet-600 lg:w-[18%]'>
            <div className='mx-auto mt-10 flex h-20 w-[40%] items-center justify-center'>
              <img src={image}  alt="" />
            </div>
            <div className='text-center text-xl text-white'>{title}</div>
        </div>
    
    </>
  )
}

export default Minicategorycart