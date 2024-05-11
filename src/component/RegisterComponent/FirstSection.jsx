import { Formik , Field , Form  } from "formik";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
const FirstSection = () => {
    const handleSubmit = () =>{
        return(
            <div>
                hhhhhh
            </div>
        )
    }

//  steper function

    const steper = () => {
        const [active, setActive] = useState(1);
        const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
        const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

        return (
            <>
             <Group justify="center" mt="xl" className=" w-[80%] md:w-[90%] text-center text-[16px] 
             md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                <Button onClick={nextStep} className="text-[#2416E9] bg-[#E7E2FF] py-2 px-4 rounded-md ml-28">Next step</Button>
                <Button variant="default" onClick={prevStep} className="text-[#2416E9] bg-[#E7E2FF] py-2 px-4 rounded-md">Back</Button>
                
            </Group>
            <Stepper active={active} onStepClick={setActive} className="flex flex-col w-[80%] md:w-[90%] 
            text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                <Stepper.Step label="First step" description="Create an account" className="border-4 w-[41px] h-[41px] rounded-full border-[#A193FF]">
                Step 1 content: Create an account
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                Step 2 content: Verify email
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
                Step 3 content: Get full access
                </Stepper.Step>
                <Stepper.Completed>
                Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

           
            </>
        );
    }
    return ( 
        
        <div className="w-full">
        <Formik initialValues={{email:'' , pass:''}} onSubmit={handleSubmit}>
            <Form className="">
                <div className="w-full mt-3 flex flex-col">
                    <div className="w-[80%] flex flex-col" >
                          {/* <label for="email" className=" text-[16px] mr-6 text-nowrap my-1 "> شماره موبایل یا ایمیل </label> */}
                        
                          <Field id="email" className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff] mr-6" type='text' name='email' placeholder='   شماره موبایل خود را وارد کنید '/>
                    </div>
                </div>
                <div className="w-[80%] mr-6 mt-4">
                <button className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-4 md:py-6 text-center  
                text-white " type="submit" >  دریافت کد یک بار مصرف </button>
                </div>
            </Form>    
        </Formik>  
        {/* <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
            
             <div> <Link className="text-[#2416E9] bg-[#E7E2FF] py-2 px-4 rounded-md" to='/register'> مرحله بعد </Link></div>
             <div> <Link className="text-[#A193FF] bg-[#E7E2FF] py-2 px-4 rounded-md" to='/register'>مرحله قبل</Link></div>
        </div>
        <div className="flex w-[80%] md:w-[90%] pb-4 text-[#3F40EA] mx-auto justify-around items-center text-center 2xl:max-w-2xl">
                        <div className=" border-4 w-[41px] h-[41px] rounded-full border-[#A193FF]">3</div>
                        <div className="w-2/5 border-4 h-0 mt-[8px] border-[#A193FF]"></div>
                        <div className="border-4  w-[41px] h-[41px] rounded-full border-[#A193FF]">2</div>
                        <div className="w-2/5 border-4 h-0 mt-[8px] border-[#A193FF]"></div>
                        <div className="border-4  w-[41px] h-[41px] rounded-full bg-yellow-400 border-[#A193FF]">1</div>
         </div>
         <div className="flex w-[80%] md:w-[90%] pb-4 mx-auto justify-between items-center text-center 2xl:max-w-2xl">
                        <div className="  text-[#A193FF] text-nowrap b">مشخصات کاربری</div>
                        
                        <div className="   text-[#A193FF] text-nowrap" >دریافت کد</div>
                        
                        <div className=" text-nowrap text-[#4E447D]">شماره تماس</div>
         </div> */}
            <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
            {steper()}
            </div>
        </div> 
     );
}
 
export default FirstSection;