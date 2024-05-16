import imgLanding from '../../../assets/image/main.jpg'
import coverLanding from '../../../assets/image/Rectangle 70.png'
import studdent from '../../../assets/image/student.png'
import teacher from '../../../assets/image/teacher.png'
import learn from '../../../assets/image/learn.png'
import '../../../App.css'

export const Toplanding = () => {
    return(
        <div className="relative flex justify-center items-baseline w-full h-96 md:h-[46.8rem]">
            <div className="shadow-lg shadow-slate-600/50 rounded-bl-[9.5rem] w-full h-full overflow-hidden">
                <img src={imgLanding} className='bg-cover w-full h-full'  alt="" />
            </div>
            <div className="absolute w-full h-full">
                <img src={coverLanding} className='bg-cover rounded-bl-[11.5rem] w-full h-full'  alt="" />
            </div>
            <div className='absolute flex flex-col items-center mt-12 w-10/12 md:max-w-2xl h-5/6 text-white'>
            <div className='text-[#d0cdff] md:text-xl'><span>پلتفرم آموزش طراحی وب</span></div>
            <div className='mt-6 md:mt-10'><h1 className='text-3xl md:text-6xl'>مرجع آموزش برنامه نویسی</h1></div>
            <div className='mt-6 md:mt-14 text-[#f2e8ff] text-center text-lg text-wrap md:text-3xl leading-8 md:leading-[3.5rem]'><span>مرجع آموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی</span></div>
            

            <div className="absolute mt-60 md:mt-[22rem] w-full">
            <input type="text" id="search" className="md:top-80 text-right bg-[#F0E8FF] ring-opacity-30 pr-6 rounded-md w-full h-[3rem] ring-[#E3D4FF] dark:placeholder-violet-200 dark:bg-violet-950 ring-8" placeholder="چه چیزی می خوای یاد بگیری..." />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="top-[0.8rem] left-3 absolute w-6 h-6 text-[#121242] dark:text-violet-200 text-opacity-40">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            </div>
            <div className='md:block md:top-[28rem] absolute md:flex flex-row md:flex-row justify-evenly hidden w-full'> 
                <div className='flex-col'>
                    <img src={teacher} className='w-[7.7rem] h-[7.7rem]' alt="" />
                    <span className='block text-center'>53254</span>                    
                    <span className='block text-center'> مدرس مجرب</span>
                </div>
                <div className='flex-col'>
                    <img src={learn} className='w-[8rem] h-[8rem]' alt="" />
                    <span className='block text-center'>53254</span>                    
                    <span className='block text-center'>دقیقه آموزش </span>
                </div>
                <div className='flex-col'>
                    <img src={studdent} className='w-[7.7rem] h-[7.7rem]' alt="" />
                    <span className='block text-center'>53254</span>                    
                    <span className='block text-center'>نفر دانشجو  </span>
                </div>
            </div>
            </div>
        </div>
    )
}