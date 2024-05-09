import { Link } from "react-router-dom";
import { Formik , Field , Form  } from "formik";
import { useState } from "react";
import IconMenuLogin from "./IconMenuLogin";
import '../../App.css'
const LoginForm = () => {

    const handleSubmit = () =>{
        return(
            <div>
                hhhhhh
            </div>
        )
    }
    return ( 
        <>
<<<<<<< HEAD
        {/* w-[28rem] sm:w-[40rem] md:w-[48rem] lg:[64rem] xl:[80rem] 2xl:[96rem] */}
        <div className="w-[100%] h-[100%] bg-[#5c5cad] bg-opacity-5 mx-auto">
              <div className="w-full ">
=======
        <div className="bg-[#5c5cad] bg-opacity-5 mx-auto rounded-b-lg md:rounded-l-lg w-full h-full">
              <div className="w-full">
>>>>>>> 845842db1b8879b5e53b6b022bc0cd63166df0c8
              <IconMenuLogin />
              </div>
              <div className="w-full text-[#6359f0] text-3xl text-center text-nowrap">ورود به سایت</div>
              <div className="text-right mt-4 mr-7 w-full text-[#A193FF] text-nowrap"> نام کاربری و رمز عبور خود را وارد کنید </div>
              <div className="w-full">
              <Formik initialValues={{email:'' , pass:''}} onSubmit={handleSubmit}>
                  <Form className="">
                      <div className="flex flex-col mt-3 w-full">
                          <div className="flex flex-col w-[80%]" >
                                {/* <label for="email" className="my-1 mr-6 text-[16px] text-nowrap"> شماره موبایل یا ایمیل </label> */}
                              
                                <Field id="email" className="border-[#a193ff] border-2 my-4 mr-6 pr-3 rounded-lg w-full h-10" type='text' name='email' placeholder=' شماره موبایل یا ایمیل'/>
                          </div>

                          <div className="flex flex-col mr-6 w-[80%] relativ" >
                                {/* <label for="pass" className="my-1 w-full text-[16px] text-nowrap">رمز عبور </label> */}
                              
                                <Field id="pass" className="border-[#a193ff] border-2 pr-3 rounded-lg w-full h-10" type='text' name='pass' placeholder=' رمز عبور   '/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b2aff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7b2aff" 
                                    className="relative bottom-7 left-2 flex mr-auto w-5 h-5" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>

                          </div>

                      </div>
<<<<<<< HEAD
                      <div className="w-[80%] mr-6 h-6 flex justify-end items-center">
                          <Link to='/login/forget' className="hover:text-[#6359f0] flex text-left text-[#A193FF] text-[10px] md:text-[16px]">فراموشی رمز؟</Link>
=======
                      <div className="flex justify-end items-center mr-6 w-[80%] h-6">
                          <Link to='/forget' className="flex text-[#A193FF] text-[10px] text-left md:text-[16px] hover:text-[#6359f0]">فراموشی رمز؟</Link>
>>>>>>> 845842db1b8879b5e53b6b022bc0cd63166df0c8
                      </div>

                      <div className="flex justify-start items-center my-2 w-full h-6">
                          <Field id="remember" className="custom-input2 mr-6 w-[15px] h-[15px]" type='checkbox' name='remember' />
                          <label for="remember" className="mr-2 text-[#A193FF] text-[12px] text-nowrap md:text-[18px]"> مرا بخاطر بسپار</label>
                      </div>

                      <div className="mt-4 mr-6 w-[80%]">
                      <button className="flex justify-center bg-gradient-to-r from-[#7b2aff] to-[#4545ff] mx-auto mb-5 py-2 md:py-4 rounded-lg w-[60%] font-bold text-center text-nowrap text-sm text-white md:text-lg" type="submit" > ورود به سایت</button>
                      </div>
                  </Form>    
              </Formik>  
<<<<<<< HEAD
              <div className="w-[80%] text-center text-[14px] md:text-[18px] mt-8 mr-7 mb-4 text-[#A193FF] text-nowrap  ">
                    <Link className="hover:text-[#6359f0]" to='/login/register'>حساب کاربری ندارید؟ ثبت نام</Link>
=======
              <div className="mt-8 mr-7 mb-4 w-[80%] text-[#A193FF] text-[14px] text-center text-nowrap md:text-[18px]">
                    <Link className="hover:text-[#6359f0]" to='/register'>حساب کاربری ندارید؟ ثبت نام</Link>
>>>>>>> 845842db1b8879b5e53b6b022bc0cd63166df0c8
              </div>
              </div> 
          </div>
  </>
     );
}
 
export default LoginForm;