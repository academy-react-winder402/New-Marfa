

import { SwipperComponent } from "../../component/LandingComponent/swipper/SwipperComponent";
import TitrComponent from "../TitrComponent/TitrComponent";
import AllButton from "../button/AllButton";

export const Card = () => {

  return (
    <>
      <TitrComponent title='دوره های آموزشی' />
      <SwipperComponent />
      {/* <AllButton title='نمایش همه' /> */}
    </>
  );
};
