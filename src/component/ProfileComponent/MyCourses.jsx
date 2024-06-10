import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";
import { TableSelectedCourse } from "./TableSelectedCourse";

const MyCourses = () => {
    const {data} = CustomGetUseQueryExtra('getFavoritCourse',`/SharePanel/GetMyFavoriteCourses`)
  return (
    <>
      <div className="w-[95%] mx-auto">
        <TableSelectedCourse data={data && data.listOfMyCourses} />
      </div>
    </>
  );
};

export default MyCourses;
