// import { ProfileButtomComponent } from "./ProfileButtomComponent";
// import { ProfileTopComponent } from "./ProfileTopComponent";
import html from "../../assets/image/3.jpg";

import { TableRowComponent } from "./TableRowComponent";


export const TableSelectedCourse = ({data}) => {

  // const {data} = CustomGetUseQueryExtra('getProfileInfo',`/SharePanel/GetProfileInfo`)

  // const Data = [
  //   {
  //     id: 1,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     master: " دکتر بحرالعلوم",
  //     priceCourse: "500000",
  //     startTime: "1402 / 07 / 09",
  //   },
  //   {
  //     id: 2,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     master: " دکتر بحرالعلوم",
  //     priceCourse: "500000",
  //     startTime: "1402 / 07 / 09",
  //   },
  //   {
  //     id: 3,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     master: " دکتر بحرالعلوم",
  //     priceCourse: "500000",
  //     startTime: "1402 / 07 / 09",
  //   },
  //   {
  //     id: 4,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     master: " دکتر بحرالعلوم",
  //     priceCourse: "500000",
  //     startTime: " 1402 / 07 / 09",
  //   },
  //   {
  //     id: 5,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     master: " دکتر بحرالعلوم",
  //     priceCourse: "500000",
  //     startTime: " 1402 / 07 / 09",
  //   },
  //   {
  //     id: 6,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     master: " دکتر بحرالعلوم",
  //     priceCourse: "500000",
  //     startTime: " 1402 / 07 / 09",
  //   },
  // ];
  return (
    <>
    <div className="overflow-x-scroll ">

      <div className="block sm:hidden">

      </div>

      <div className="  bg-white min-w-[600px] ">
        <table className="table-fixed  w-full border-spacing-3 whitespace-nowrap  ">
          <thead className="bg-purple-700 text-white">
            <tr className="flex  flex-row  justify-around p-3 ">
              <th className="">تصویر</th>
              <th>نام دوره</th>
              <th>مدرس</th>
              <th>تاریخ شروع</th>
              <th>قیمت</th>
              <th>مدیریت</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((result, index) => {
              return (
                <TableRowComponent
                  key={result.courseId}
                  id={result.courseId}
                  title={result.courseTitle}
                  img={result.tumbImageAddress}
                  master={result.teacheName}
                  levelName={result.levelName}
                  typeName={result.typeName}
                />
              );
            })}
          </tbody>
        </table>
                </div>
      </div>
    </>
  );
};
