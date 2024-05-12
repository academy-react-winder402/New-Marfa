import React from 'react'

const Minicategorycart = ({title,image,id}) => {
  
  const bg = (Number(id)%2===0) ? `top-0` : `top-20`;
  
  return (
        <div className={` relative z-50 bg-gradient-to-b from-[#6B3FEA] to-[#7070FF] hover:bg-[#EBE0FF] rounded-2xl rounded-bl-[5rem] w-[45%] lg:w-[18%] h-52 text-white hover:text-[#6D53F2] ${bg}`}>
            <div className='flex justify-center items-center mx-auto mt-10 w-[40%] h-20 hover:text-[#6D54F3]'>
              <img src={image} className=''  alt="" />
              {/* <svg width={20} height={20}>
                <img src={image} />
              </svg> */}
            </div>
            <div className='text-center text-xl'>{title}</div>
        </div>
  
  )
}

export default Minicategorycart