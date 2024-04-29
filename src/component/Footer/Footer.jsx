import React from 'react'
import {
  RiTelegramLine,
  RiFacebookCircleFill,
  RiInstagramLine} from "react-icons/ri"
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import logo2 from "../../assets/image/logoWhite2.png"
import location from "../../assets/image/Vector.svg"
import svg2 from "../../assets/image/Rectangle 109.svg"
import svg3 from "../../assets/image/Rectangle 110.svg"
export const Footer = () => {
  return (
    
    <div className='bg-bluec'>
      <div className="h-[40rem] w-full rounded-tl-[9.5rem] bg-violet-950">
      <div className='flex w-full flex-col justify-between border-b-2 md:mb-10 md:h-[28rem] md:flex-row'>
      <div className='md:w-[65rem] lg:w-[55rem]' >
        <div className='relative flex justify-start px-20'>
          <img className='absolute right-48 mt-8 h-10' src={svg2} alt="logo2" />
          <img className='h-24' src={logo2} alt="logo" /> 
        </div>
        <div className=''>
              <div className='relative my-8 flex justify-start md:my-3 md:text-xl lg:text-2xl'>
                <img className='absolute -top-14 left-3 flex h-[6rem] md:left-20 md:h-[8rem]' src={svg3} alt="logo3" />
                <h6 className='text-1xl flex text-wrap px-24 text-start font-light leading-9 text-white'> هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت نام</h6>
              </div>
              <div> 
                <ul className='mb-10 mt-20 flex justify-center gap-10 text-white md:mt-14 md:gap-8'>
                  <li className='py-6 text-sm md:text-xl lg:text-2xl'>دوره های آموزشی</li>
                  <li className='py-6 text-sm md:text-xl lg:text-2xl'>در باره ما</li>
                  <li className='py-6 text-sm md:text-xl lg:text-2xl'>قوانین</li>
                 
                  
                </ul>
              </div>
        </div>
       </div>
        
        <div className='md:mt-38 my-auto ml-10 text-center text-white md:w-[20rem] lg:w-[35rem]' >
          <div className='relative flex'>
            <img src={svg3} alt="" className='absolute -top-10 left-24 flex h-12'/>
            <span className="-mt-5 w-full text-center text-sm text-white md:text-start md:text-lg md:leading-10 lg:text-2xl">برای دریافت اخبار از طریق ایمیل ثبت نام کنید</span>
          </div>
          <form className='mt-4'>   
           
            <div className="pointer-events-none relative inset-y-0 mb-3 flex w-full justify-center ps-3 md:start-0">
                <input type="email" id="ُSend" className="h-6 w-[25rem] justify-center rounded-lg border border-gray-300 bg-gray-50 p-4 text-end text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:h-12 md:w-[15rem] lg:w-[45rem] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="MARFA@gmail.com" />
                <button type="submit" className="absolute bottom-1 start-40 ml-8 flex rounded-lg bg-blue-700 px-4 py-1 text-end text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:right-7 md:h-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ارسال</button>
            </div>
          </form>
 
        </div>
       
      </div>
      {/* footer-adress */}
      <div className='mt-8 flex justify-around md:justify-center'>
        
        <div className='my-6 flex justify-start gap-4 text-white md:w-[50%] md:gap-10'>
            <TfiTwitter size={30}/>
            <RiFacebookCircleFill size={30}/>
            <RiInstagramLine  size={30}/>
            <IoLogoLinkedin size={30}/>
            <RiTelegramLine size={30} />
                    
        </div>
        <div className='relative flex w-52 justify-end md:w-80'>
            <img className='absolute right-[6rem] top-[1.3rem] h-3 md:right-[9.5rem] md:top-[1.3rem]' src={location} alt=""/>
            <span className='py-4 text-white md:text-lg lg:text-xl'> ساری جاده فرح آباد</span>
        </div>
        
      </div>
    </div>
    </div>
  );
};
