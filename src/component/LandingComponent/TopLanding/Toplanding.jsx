import imgLanding from '../../../assets/image/main.jpg'
import coverLanding from '../../../assets/image/Rectangle 70.png'
import studdent from '../../../assets/image/student.png'
import teacher from '../../../assets/image/teacher.png'
import learn from '../../../assets/image/learn.png'
import '../../../App.css'

export const Toplanding = () => {
    return(
        <div className="relative flex h-96 w-full items-baseline justify-center md:h-[46.8rem]">
            <div className="h-full w-full overflow-hidden rounded-bl-[9.5rem] shadow-lg shadow-slate-600/50">
                <img src={imgLanding} className='h-full w-full bg-cover'  alt="" />
            </div>
            <div className="absolute h-full w-full">
                <img src={coverLanding} className='h-full w-full rounded-bl-[11.5rem] bg-cover'  alt="" />
            </div>
            <div className='absolute mt-12 flex h-5/6 w-10/12 flex-col items-center text-white md:max-w-2xl'>
            <div className='md:text-xl text-[#d0cdff]'><span>پلتفرم آموزش طراحی وب</span></div>
            <div className='mt-6 md:mt-10'><h1 className='text-3xl md:text-6xl'>مرجع آموزش برنامه نویسی</h1></div>
            <div className='mt-6 text-wrap text-center text-lg leading-8 md:mt-14 md:text-3xl md:leading-[3.5rem] text-[#f2e8ff]'><span>مرجع آموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی</span></div>
            

            <div className="absolute mt-60 w-full md:mt-[22rem]">
            <input type="text" id="search" className="w-full rounded-md h-[3rem] ring-8 bg-[#F0E8FF] ring-[#E3D4FF] ring-opacity-30 pr-6 text-right md:top-80" placeholder="چه چیزی می خوای یاد بگیری..." />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute left-3 top-[0.8rem] h-6 w-6 text-[#121242] text-opacity-40">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            </div>
            <div className='absolute hidden w-full flex-row justify-evenly md:top-[28rem] md:block md:flex md:flex-row'> 
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