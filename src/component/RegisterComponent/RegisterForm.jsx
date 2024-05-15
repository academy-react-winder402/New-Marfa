import { Link } from "react-router-dom";

import { useState } from "react";

import '../../App.css'
import RegisterIcon from "./RegisterIcon";
import FirstSection from "./FirstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
const RegisterForm = ({title , description}) => {

    const [Count, setCount] = useState(1);
  
    return ( 
        <>
        <div className="w-full h-full bg-[#5c5cad] bg-opacity-5 mx-auto rounded-b-lg md:rounded-l-lg  ">
              <div className="w-full pt-5 ">
              <RegisterIcon />
              </div>
              <div className="w-full text-center text-[#6359f0] text-nowrap text-3xl">{title}</div>
                {Count === 1 && <FirstSection setCount={setCount} description={description}/>}
                {Count === 2 && <SecondSection setCount={setCount}  description={description}/>}
                {Count === 3 && <ThirdSection setCount={setCount}  description={description}/>}
          </div>
  </>
     );
}
 
export default RegisterForm;