import React from "react";
import { Dropdown } from "flowbite-react";

export const DropdownComponent2 = () =>{
  return (
 
      <Dropdown label="صعودی " className='bg-slate-400 mx-auto rounded-lg w-auto text-gray-400'  id="accordion-open-heading-1" dismissOnClick={false}>
        <Dropdown.Item> نزولی </Dropdown.Item>
        <Dropdown.Item>صعودی</Dropdown.Item>
     
      </Dropdown>
 
  );
}

