import html from "../../assets/image/3.jpg";


import { CardItem } from "../Cource/CardItem";

export const Card = () => {
  const Data = [
    {
      id: 1,
      img: html,
      title: "html آموزش مقدماتی",
      sectionCours: "199",
      timeCours: "14 ساعت",
      calender: "آذر 1402",
      master: "بحرالعلوم",
      like: "32",
      disLike: "2",
      priceCourse: "500000",
      countStudio: "257",
    },
    {
      id: 2,
      img: html,
      title: "html آموزش مقدماتی",
      sectionCours: "199",
      timeCours: "14 ساعت",
      calender: "آذر 1402",
      master: "بحرالعلوم",
      like: "32",
      disLike: "2",
      priceCourse: "500000",
      countStudio: "257",
    },
    {
      id: 3,
      img: html,
      title: "html آموزش مقدماتی",
      sectionCours: "199",
      timeCours: "14 ساعت",
      calender: "آذر 1402",
      master: "بحرالعلوم",
      like: "32",
      disLike: "2",
      priceCourse: "500000",
      countStudio: "257",
    },
    {
      id: 4,
      img: html,
      title: "html آموزش مقدماتی",
      sectionCours: "199",
      timeCours: "14 ساعت",
      calender: "آذر 1402",
      master: "بحرالعلوم",
      like: "32",
      disLike: "2",
      priceCourse: "500000",
      countStudio: "257",
    },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col md:flex-wrap md:gap-5 mx-auto w-[95%]">
      <div className="flex flex-col items-center w-full my-16 text-lg text-start md:text-nowrap md:text-2xl">
            <span className="block w-32 md:w-32 md:text-2xl"> دوره های آموزشی</span>
            <span className="block bg-gradient-to-l from-slate-600 to-transparent py-[2px] w-32"></span>
        </div>
        {Data.map((result, index) => {
          return (
            <div key={index} className="md:mx-auto md:w-[45%] lg:w-[23%]">
              <div className="bg-violet-50 mt-4 mb-10 p-[1rem] rounded-[0.9375rem]">
                <CardItem
                  title={result.title}
                  img={result.img}
                  sectionCours={result.sectionCours}
                  timeCours={result.timeCours}
                  calender={result.calender}
                  master={result.master}
                  like={result.like}
                  dislike={result.dislike}
                  priceCourse={result.priceCourse}
                  countStudio={result.count}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center h-10 pb-28">
        <button className="w-40 h-16 p-2 text-xl text-white bg-blue-700 rounded-2xl md:rounded-2xl">
          مشاهده همه
        </button>
      </div>
    </>
  );
};
