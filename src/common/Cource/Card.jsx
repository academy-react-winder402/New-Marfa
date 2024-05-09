
import { Cardcomponentcourses } from "../../component/CourseComponent/Cardcomponentcourses";
import TitrComponent from "../TitrComponent/TitrComponent";
import AllButton from "../button/AllButton";

export const Card = () => {

  return (
    <>
      <TitrComponent title='دوره های آموزشی' />
      <Cardcomponentcourses/>
      <AllButton title='نمایش همه' />
    </>
  );
};
