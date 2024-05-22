import Data from "../CourseComponent/Data.json"
import { CardItem } from "../../common/Cource/CardItem";
import { useQuery } from "react-query";
import axios from "axios";
import http from "../../core/services/interceptore"

export const Cardcomponentcourses = () => {

    const getCourseList =async() => {
      const res = await http.get("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0")
      //console.log(res.data.courseFilterDtos);

      return res
     }

      const {data , isLoading ,isError , error} = useQuery("courseList1", getCourseList)
  return (
    <>
      <div className="flex md:flex-row flex-col md:flex-wrap justify-center md:justify-center items-center gap-10 md:gap-3 mx-auto w-[95%]">
        {data?.courseFilterDtos.map((result, index) => {
          return (
            <div key={index} className="mx-auto md:w-[45%] lg:w-[30%]">
              <div className="bg-violet-50 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 mt-1 mb-10 p-[1rem] rounded-[0.9375rem]">
                <CardItem
                  id={result.courseId}
                  title={result.title}
                  img={result.tumbImageAddress}
                  sectionCours={result.sectionCours}
                  timeCours={result.timeCours}
                  calender={result.statusName}
                  master={result.teacherName}
                  like={result.likeCount}
                  dislike={result.dissLikeCount}
                  priceCourse={result.cost}
                  countStudio={result.currentRegistrants}
                />
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
};
