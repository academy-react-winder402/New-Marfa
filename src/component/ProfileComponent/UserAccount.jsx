import { Link } from "react-router-dom";
import { Formik , Field , Form  } from "formik";
import ProfileImage from "./ProfileImage";

const UserAccount = () => {
    const handleSubmit = () =>{
        return(
            <div>
                hhhhhh
            </div>
        )
    }
    return ( 
        <div className="w-[90%] h-[90%] mx-auto">
        <ProfileImage />
        <div className="w-full ">
          <Formik initialValues={{name:'' ,lastName:'',NationalCode:'',email:'',email:'',BirthdayDate:'',mobilPhon:'' }} onSubmit={handleSubmit}>
             <Form className="w-full  ">
                 <div className="w-full mt-3 flex flex-row item-center
                  text-gray-500 flex-wrap md:justify-around  text-[20px] text-nowrap">

                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto " >
                           <label for="name" className=" mb-1 "> نام    </label>
                           <Field id="name" className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] " type='text' name='name' />
                     </div>

                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto" >
                           <label for="lastName" className="w-full  mb-1">  نام خانوادگی </label>
                         
                           <Field id="lastName" className="w-full h-10 rounded-lg pr-3 mb-4  border-2 border-[#a193ff]" type='text' name='lastName' />
                     </div>
                     <div className="w-[70%] flex flex-col mx-auto md:w-[45%] lg:w-[30%]" >
                           <label for="NationalCode" className=" mb-1">  کد ملی  </label>
                         
                           <Field id="NationalCode" className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='NationalCode' />
                     </div>
                     <div className="w-[70%] md:w-[45%] lg:w-[30%] flex flex-col mx-auto " >
                           <label for="email" className="w-full mb-1">  ایمیل   </label>
                         
                           <Field id="email" className="w-full h-10 mb-4 rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='email' />
                     </div>
                     <div className="w-[70%]  flex flex-col mx-auto md:w-[45%] lg:w-[30%] " >
                           <label for="BirthdayDate" className=" mb-1">  تاریخ تولد   </label>
                         
                           <Field id="BirthdayDate" className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='BirthdayDate' />
                     </div>
                     <div className="w-[70%] flex flex-col mx-auto md:w-[45%] lg:w-[30%] " >
                           <label for="mobilPhon" className="w-full mb-1">  شماره موبایل   </label>
                         
                           <Field id="mobilPhon" className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='mobilPhon' />
                     </div>
                 </div>
                 <div className="w-[80%] mx-auto mt-4">
                 <button className="flex justify-center mb-5 text-lg md:text-xl font-bold mx-auto text-nowrap 
                 rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-2 md:py-4 text-center  
                 text-white " type="submit" >  ثبت اطلاعات </button>
                 </div>
             </Form>    
             </Formik>  
         </div> 
   </div>
     );
}
 
export default UserAccount;