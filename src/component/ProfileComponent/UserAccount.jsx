import { Link } from "react-router-dom";
import { Formik , Field , Form  } from "formik";
import ProfileImage from "./ProfileImage";
import http from '../../core/services/interceptore'

const UserAccount = () => {
      const handleUserInfoSubmit =async (values) =>{
            const res=await http.post('/User/CreateUser',values)
            console.log(res);
            
            if(res.success===true){
               alert('success')
           }
       }
    return ( 
        <div className="w-[90%] h-[90%] mx-auto">
        <ProfileImage />
        <div className="w-full ">
          <Formik initialValues={{LName:'' ,FName:'',UserAbout:'',LinkdinProfile:'',TelegramLink:'',NationalCode:'',HomeAdderess:'',email:'',email:'',BirthDay:'',mobilPhon:'' }} onSubmit={handleUserInfoSubmit}>
             <Form className="w-full  ">
                 <div className="w-full mt-3 flex flex-row item-center
                  text-gray-500 flex-wrap md:justify-around  text-[20px] text-nowrap">

                     

                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto" >
                           <label for="LName" className="w-full  mb-1">  نام خانوادگی </label>
                         
                           <Field id="LName" className="w-full h-10 rounded-lg pr-3 mb-4  border-2 border-[#a193ff]" type='text' name='LName' />
                     </div>
                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto " >
                           <label for="FName" className=" mb-1 "> نام    </label>
                           <Field id="FName" className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] " type='text' name='FName' />
                     </div>
                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto " >
                           <label for="UserAbout" className=" mb-1 "> درباره کاربر    </label>
                           <Field id="UserAbout" className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] " type='text' name='UserAbout' />
                     </div>
                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto " >
                           <label for="LinkdinProfile" className=" mb-1 ">  لینکدین پروفایل    </label>
                           <Field id="LinkdinProfile" className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] " type='text' name='LinkdinProfile' />
                     </div>
                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto " >
                           <label for="TelegramLink" className=" mb-1 "> تلگرام لینک    </label>
                           <Field id="TelegramLink" className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] " type='text' name='TelegramLink' />
                     </div>
                     <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto " >
                           <label for="HomeAdderess" className=" mb-1 ">  آدرس منزل    </label>
                           <Field id="HomeAdderess" className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] " type='text' name='HomeAdderess' />
                     </div>
                     <div className="w-[70%] flex flex-col mx-auto md:w-[45%] lg:w-[30%]" >
                           <label for="NationalCode" className=" mb-1">  کد ملی  </label>
                         
                           <Field id="NationalCode" className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='NationalCode' />
                     </div>
                     <div className="w-[70%] md:w-[45%] lg:w-[30%] flex flex-col mx-auto " >
                           <label for="gmail" className="w-full mb-1">  ایمیل   </label>
                         
                           <Field id="gmail" className="w-full h-10 mb-4 rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='gmail' />
                     </div>
                     <div className="w-[70%]  flex flex-col mx-auto md:w-[45%] lg:w-[30%] " >
                           <label for="BirthDay" className=" mb-1">  تاریخ تولد   </label>
                         
                           <Field id="BirthDay" className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='BirthDay' />
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