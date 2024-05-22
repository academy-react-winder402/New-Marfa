import React from "react";
import { Dropdown } from "flowbite-react";

export const DropdownComponent = () =>{
  return (
 
      <Dropdown label="titel " className='mx-auto rounded-lg w-auto'  id="accordion-open-heading-1" dismissOnClick={false}>
        <Dropdown.Item>Item1jbjhvghchgcfgcxgfx </Dropdown.Item>
        <Dropdown.Item>item2</Dropdown.Item>
        <Dropdown.Item>item3</Dropdown.Item>
        <Dropdown.Item>item4</Dropdown.Item>
      </Dropdown>
 
  );
}
