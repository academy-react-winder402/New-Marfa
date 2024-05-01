import React from 'react'

import  Imagetop from '../../assets/image/workshop1.png'


const Topheaderseconde = () => {
  return (
   <div className='w-full'>
     <div className='flex md:flex-row flex-col justify-center md:justify-center lg:justify-around items-center'>
      <div className='my-8 mr-14 text-center md:text-start'>
        <div className='my-5 text-2xl text-violet-400 md:text-xl lg:text-2xl' > <h5>مهمه از کی یاد می گیری؟</h5></div>
        <div className='my-10 font-bold md:font-extrabold text-3xl text-violet-900 md:text-2xl lg:text-3xl'> <h2>آموزش برنامه نویسی با بهترین ها</h2></div>
        <div className='w-[25rem] md:w-[28rem] lg:w-[45rem] text-2xl text-violet-800 text-wrap md:text-l lg:text-2xl leading-10 md:leading-10 lg:leading-10'><h1>آموزش برنامه نویسی یکی از دوره های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می دهد تا نرم افزار های کامپیوتری را ایجاد و توسعه دهند.</h1> </div>
      </div>
      <div className='items-center w-[full]'>
        <img src={Imagetop} alt="" />
      </div>
      
    </div>
   </div>
 
  )
  
}

export default Topheaderseconde
 