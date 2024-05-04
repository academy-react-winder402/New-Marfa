
import { Cardcomponentcourses } from "../../component/CourseComponent/Cardcomponentcourses";
import Data from "../../component/CourseComponent/Date.json"

import { CardItem } from "../Cource/CardItem";
import TitrComponent from "../TitrComponent/TitrComponent";
import AllButton from "../button/AllButton";

export const Card = () => {

  return (
    <>
      <TitrComponent title='دوره های آموزشی' />
      <Cardcomponentcourses />
      <AllButton title='نمایش همه' />
    </>
  );
};
