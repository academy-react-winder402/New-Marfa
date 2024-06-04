import { CardItem } from "../../common/Cource/CardItem";
import http from "../../core/services/interceptore"
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { getList } from "../../function/getList";



export const Cardcomponentcourses = ({data , paginationArray , PageNum , setPageNum}) => {



  const setFiltershow = useSelector(state=>state.setFiltershow.setFiltershow)
  const cardSize=setFiltershow?`w-[22rem]`:`w-[24rem]`
    const getCourseList =async() => {
      const res = await http.get("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0")
      //console.log(res.data.courseFilterDtos);
      return res
     }

  return (
    <>
     <div className="flex flex-col">
     <div className="flex md:flex-row flex-col md:flex-wrap justify-center md:justify-center items-center gap-10 md:gap-3 mx-auto w-[95%]">
        {data?.courseFilterDtos.map((result, index) => {
          return (
            <div key={index} className={` mx-auto  ${cardSize}`}>
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
      {/* <button onClick={() => setPageNum(PageNum+1)}>nextpage </button> */}
      <div className="flex flex-row justify-center items-center gap-2 font-[18px]">
      {paginationArray?.length>0 && paginationArray?.map(item => {
          return(
            <div key={item.index} className="border-2 w-[30px] h-[30px] text-center cursor-pointer" onClick={() => setPageNum(item)}>{item}</div>
          )
        }) }
      </div>
     </div>
    </>
  );
};
