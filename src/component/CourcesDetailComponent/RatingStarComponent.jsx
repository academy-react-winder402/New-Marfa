// import { Rating } from "flowbite-react";
// import { Flowbite } from flowbite-react";
import { useState } from 'react';
import { Rating } from '@mantine/core';
// component for star
export const RatingStarComponent= () => {
  const [value, setValue] = useState(0);
   
      return <Rating value={value} onChange={setValue} />;
    
  }