import { Link } from "react-router-dom";
import { Formik , Field , Form  } from "formik";
const ChangePass = () => {
    const handleSubmit = () =>{
        return(
            <div>
                hhhhhh
            </div>
        )
    }
    return ( 
        <div className="w-[40rem] md:w-[48rem] lg:[64rem] xl:[80rem] 2xl:[96rem] mx-auto">
            <div className="w-[80%]  mx-auto">

               <Formik initialValues={{currentPass:'' , newPass:'', confirmNewPass:''}} onSubmit={handleSubmit}>
                  <Form className=" mt-3 flex flex-col text-gray-500 items-center justify-center ">
                      <div className="w-full flex flex-col text-gray-500 items-center justify-center  ">

                          <div className="w-[80%] flex flex-col  " >
                                <label for="currentPass" className=" text-[16px] text-nowrap my-1 ">  رمز عبور فعلی  </label>
                                <Field id="currentPass" className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff]" type='text' name='currentPass' />
                          </div>

                          <div className="w-[80%]  flex flex-col" >
                                <label for="newPass" className="w-full  text-[16px] text-nowrap my-1">رمز عبور جدید </label>
                              
                                <Field id="newPass" className="w-full h-10 rounded-lg pr-3 my-4  border-2 border-[#a193ff]" type='text' name='newPass' />
                          </div>
                          <div className="w-[80%]  flex flex-col " >
                                <label for="confirmNewPass" className="w-full  text-[16px] text-nowrap my-1">تکرار رمز عبور جدید </label>
                              
                                <Field id="confirmNewPass" className="w-full h-10 my-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='confirmNewPass' />
                          </div>
                      </div>
                      <div className="w-[80%] mr-6 mt-4">
                      <button className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                      rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-2 md:py-4 text-center  
                      text-white " type="submit" >  ثبت اطلاعات </button>
                      </div>
                  </Form>    
              </Formik>  
            </div>
       
        </div>
     );
}
 
export default ChangePass;