// import { ProfileButtomComponent } from "./ProfileButtomComponent";
// import { ProfileTopComponent } from "./ProfileTopComponent";
import html from "../assets/image/3.jpg";
import { TableComponent } from "./TableComponent";

export const Table = () => {
  const Data = [
    {
      id: 1,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
      startTime: "1402 / 07 / 09",
    },
    {
      id: 2,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
      startTime: "1402 / 07 / 09",
    },
    {
      id: 3,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
      startTime: "1402 / 07 / 09",
    },
    {
      id: 4,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
      startTime: " 1402 / 07 / 09",
    },
    {
      id: 5,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
      startTime: " 1402 / 07 / 09",
    },
    {
      id: 6,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
      startTime: " 1402 / 07 / 09",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto bg-white">
        <table className="table-fixed border-collapse border border-slate-400 w-full border-spacing-3 whitespace-nowrap min-w-[700px] ">
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
            {Data.map((result, index) => {
              return (
                <TableComponent
                  key={index}
                  title={result.title}
                  img={result.img}
                  master={result.master}
                  priceCourse={result.priceCourse}
                  startTime={result.startTime}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
