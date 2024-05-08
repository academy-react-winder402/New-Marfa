import { Link } from "react-router-dom";

import { useState } from "react";

import '../../App.css'
import RegisterIcon from "./RegisterIcon";
import FirstSection from "./FirstSection";
const RegisterForm = ({title , description}) => {
  
    return ( 
        <>
        <div className="w-full h-full bg-[#5c5cad] bg-opacity-5 mx-auto rounded-b-lg md:rounded-l-lg  ">
              <div className="w-full pt-5 ">
              <RegisterIcon />
              </div>
              <div className="w-full text-center text-[#6359f0] text-nowrap text-3xl">{title}</div>
              <div className="w-full text-right mt-4 mr-7 text-[#A193FF] text-nowrap "> {description}</div>
              <FirstSection />
          </div>
  </>
     );
}
 
export default RegisterForm;