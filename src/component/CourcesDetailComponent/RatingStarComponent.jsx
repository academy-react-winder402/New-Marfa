import { Rating } from "flowbite-react";
import { Flowbite } from "flowbite-react";
// component for star
export const RatingStarComponent= () => {
    return (
    <Flowbite theme={{ "star": {
       "empty": "text-gray-300 dark:text-gray-500",
       "filled": "text-yellow-400",
       "sizes": {
         "sm": "h-5 w-5",
         "md": "h-7 w-7",
         "lg": "h-10 w-10"
       } 
    }}}>
      <Rating >
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
      </Rating>
      </Flowbite>
    );
  }