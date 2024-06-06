import React from "react";
import { Dropdown } from "flowbite-react";

export const DropdownComponent = () =>{
  return (
 
      <Dropdown label="دسته بندی  " className='bg-slate-400 mx-auto rounded-lg w-72 text-gray-400'  id="accordion-open-heading-1" dismissOnClick={false}>
        <Dropdown.Item> Next </Dropdown.Item>
        <Dropdown.Item>React</Dropdown.Item>
        <Dropdown.Item>Javascript</Dropdown.Item>
        <Dropdown.Item>C+</Dropdown.Item>
      </Dropdown>
 
  );
}

