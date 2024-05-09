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
        {/* w-[28rem] sm:w-[40rem] md:w-[48rem] lg:[64rem] xl:[80rem] 2xl:[96rem] */}
        <div className="w-[100%] h-[100%] bg-[#5c5cad] bg-opacity-5 mx-auto">
              <div className="w-full ">
              <IconMenuLogin />
              </div>
              <div className="w-full text-center text-[#6359f0] text-nowrap text-3xl">ورود به سایت</div>
              <div className="w-full text-right mt-4 mr-7 text-[#A193FF] text-nowrap "> نام کاربری و رمز عبور خود را وارد کنید </div>
              <div className="w-full">
              <Formik initialValues={{email:'' , pass:''}} onSubmit={handleSubmit}>
                  <Form className="">
                      <div className="w-full mt-3 flex flex-col">
                          <div className="w-[80%] flex flex-col" >
                                {/* <label for="email" className=" text-[16px] mr-6 text-nowrap my-1 "> شماره موبایل یا ایمیل </label> */}
                              
                                <Field id="email" className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff] mr-6" type='text' name='email' placeholder=' شماره موبایل یا ایمیل'/>
                          </div>

                          <div className="w-[80%] relativ flex flex-col mr-6 " >
                                {/* <label for="pass" className="w-full  text-[16px] text-nowrap my-1">رمز عبور </label> */}
                              
                                <Field id="pass" className="w-full h-10 rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='pass' placeholder=' رمز عبور   '/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b2aff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7b2aff" 
                                    className=" mr-auto relative flex left-2 bottom-7 h-5 w-5" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>

                          </div>

                      </div>
                      <div className="w-[80%] mr-6 h-6 flex justify-end items-center">
                          <Link to='/login/forget' className="hover:text-[#6359f0] flex text-left text-[#A193FF] text-[10px] md:text-[16px]">فراموشی رمز؟</Link>
                      </div>

                      <div className="w-full h-6 flex justify-start items-center my-2">
                          <Field id="remember" className="w-[15px] h-[15px] custom-input2 mr-6 " type='checkbox' name='remember' />
                          <label for="remember" className="text-[12px] text-[#A193FF] md:text-[18px] mr-2 text-nowrap"> مرا بخاطر بسپار</label>
                      </div>

                      <div className="w-[80%] mr-6 mt-4">
                      <button className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                      rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-2 md:py-4 text-center  
                      text-white " type="submit" > ورود به سایت</button>
                      </div>
                  </Form>    
              </Formik>  
              <div className="w-[80%] text-center text-[14px] md:text-[18px] mt-8 mr-7 mb-4 text-[#A193FF] text-nowrap  ">
                    <Link className="hover:text-[#6359f0]" to='/login/register'>حساب کاربری ندارید؟ ثبت نام</Link>
              </div>
              </div> 
          </div>
  </>
     );
}
 
export default LoginForm;