import { Formik , Field , Form  } from "formik";
import { Link } from "react-router-dom";
import { useState } from 'react';
// import { Stepper, Button, Group } from '@mantine/core';
import './StyleStepper.css'
import axios from "axios";
import http from "../../core/services/interceptore"


const FirstSection = ({description , setCount}) => {

    const handleSubmit =async (values) =>{
        // console.log(values)
        // const res=await http.post('/Sign/SendVerifyMessage',values)
        // console.log(res.success);
        setCount(2)
    }

//  steper function

    // const steper = () => {
    //     const [active, setActive] = useState(1);
    //     const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    //     const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    //     return (
    //         <>
    //          <Group justify="center" mt="xl" className=" w-[80%] md:w-[90%] text-center text-[16px] 
    //          md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
    //             <Button onClick={nextStep} className="text-[#2416E9] bg-[#E7E2FF] py-2 px-4 rounded-md ml-28">Next step</Button>
    //             <Button variant="default" onClick={prevStep} className="text-[#2416E9] bg-[#E7E2FF] py-2 px-4 rounded-md">Back</Button>
                
    //         </Group>
    //         <Stepper active={active} onStepClick={setActive} className="flex flex-col w-[80%] md:w-[90%] 
    //         text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
    //             <Stepper.Step label="First step" description="Create an account" className="border-4 w-[41px] h-[41px] rounded-full border-[#A193FF]">
    //             Step 1 content: Create an account
    //             </Stepper.Step>
    //             <Stepper.Step label="Second step" description="Verify email">
    //             Step 2 content: Verify email
    //             </Stepper.Step>
    //             <Stepper.Step label="Final step" description="Get full access">
    //             Step 3 content: Get full access
    //             </Stepper.Step>
    //             <Stepper.Completed>
    //             Completed, click back button to get to previous step
    //             </Stepper.Completed>
    //         </Stepper>

           
    //         </>
    //     );
    // }






    return ( 
        
        <div className="w-full">
            <div className="w-full text-right mt-4 mr-7 text-[#A193FF] text-nowrap "> {description}</div>
            <Formik initialValues={{phoneNumber:''}} onSubmit={handleSubmit}>
                <Form className="">
                    <div className="w-full mt-3 flex flex-col">
                        <div className="w-[80%] flex flex-col" >
                            {/* <label for="email" className=" text-[16px] mr-6 text-nowrap my-1 "> شماره موبایل یا ایمیل </label> */}
                            
                            <Field id="email" className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff] mr-6" type='text' name='phoneNumber' placeholder='   شماره موبایل خود را وارد کنید '/>
                        </div>
                    </div>
                    <div className="w-[80%] mr-6 mt-4">
                    <button className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                    rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-4 md:py-6 text-center  
                    text-white " type="submit" >  دریافت کد یک بار مصرف </button>
                    </div>
                </Form>    
            </Formik>  
            <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                

                {/* <div className="text-[#A193FF] bg-[#E7E2FF] py-2 px-4 rounded-md">مرحله قبل</div> */}
            </div>
            <div className="flex w-[80%] md:w-[90%] pb-1 text-[#3F40EA] mx-auto justify-around items-center text-center 2xl:max-w-2xl">
                            <div className=" border-4 w-[41px] h-[41px] rounded-full border-[#A193FF] flex items-center justify-center">3</div>
                            <div className="w-2/5 border-4 h-0 mt-[8px] border-[#A193FF]"></div>
                            <div className="border-4  w-[41px] h-[41px] rounded-full border-[#A193FF] flex items-center justify-center">2</div>
                            <div className="w-2/5 border-4 h-0 mt-[8px] border-[#8735F5]"></div>
                            <div className="border-4  w-[41px] h-[41px] rounded-full bg-[#8735F5] border-[#8735F5] flex items-center justify-center">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 10.1501 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934 16.6857C8.50711 17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488 16.831 10.4981 16.4571L9.25 15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 3.58645 17.5821 3.12692C16.8928 2.6674 15.9615 2.85366 15.5019 3.54295L17.9981 5.20705ZM3.18934 11.6857L8.18934 16.6857L10.3107 14.5643L5.31066 9.56434L3.18934 11.6857ZM10.4981 16.4571L17.9981 5.20705L15.5019 3.54295L8.00192 14.7929L10.4981 16.4571Z" fill="white"/>
                                </svg>
                            </div>
            </div>
            <div className="flex w-[80%] md:w-[90%] pb-4 mx-auto justify-between items-center text-center text-[12px] 2xl:max-w-2xl">
                            <div className="  text-[#A193FF] text-nowrap">مشخصات کاربری</div>
                            
                            <div className="   text-[#A193FF] text-nowrap" >دریافت کد</div>
                            
                            <div className=" text-nowrap text-[#4E447D]">شماره تماس</div>
            </div>
                {/* <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                {steper()}
                </div> */}
        </div> 
     );
}
 
export default FirstSection;