
import License from "../../component/LoginComponent/License"
import login from "../../assets/image/Login/login.png"
import elipse1 from "../../assets/image/Login/Ellipse1.png"
import elipse2 from "../../assets/image/Login/Ellipse2.png"
import elipse3 from "../../assets/image/Login/Ellipse3.png"
import LoginForm from "../../component/LoginComponent/LoginForm"
import { Outlet } from "react-router-dom"

export const Login = () => {
    return(
       
        // <div className="w-full bg-bluec">
            
            <div className="w-[80%] h-[80%] md:w-[48rem] md:h-[30rem] lg:w-[64rem] lg:h-[32rem] xl:w-[80rem] xl:h-[32rem] mx-auto flex flex-col items-center mt-5 md:mt-[8rem] 
            md:flex-row md:justify-center md:items-center">
                <div className="w-full h-1/3 md:w-1/3 md:h-full bg-white  bg-opacity-35 
                rounded-t-2xl md:rounded-t-none md:rounded-r-2xl 
                z-10 ">
                    <img className="object-contain w-full h-full" src={login} />
                </div>
                <div className="w-full h-2/3 md:w-2/3 md:h-full  bg-white bg-opacity-85 
                rounded-b-2xl md:rounded-b-none  md:rounded-l-2xl z-10 ">
                <LoginForm />  
                </div>
            </div>
    //    </div>
        

        
    )
}