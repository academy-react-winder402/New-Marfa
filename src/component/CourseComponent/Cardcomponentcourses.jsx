import Data from "../CourseComponent/Data.json"
import { CardItem } from "../../common/Cource/CardItem";

export const Cardcomponentcourses = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:flex-wrap justify-center md:justify-center items-center gap-10 md:gap-3 mx-auto w-[95%]">
        {Data.map((result, index) => {
          return (
            <div key={index} className="mx-auto md:w-[45%] lg:w-[30%]">
              <div className="bg-violet-50 mt-1 mb-10 p-[1rem] rounded-[0.9375rem]">
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
      
    </>
  );
};
