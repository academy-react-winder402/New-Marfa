import { CardItem } from "../../common/Cource/CardItem";
// import http from "../../core/services/interceptore"
// import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { getList } from "../../function/getList";



export const Cardcomponentcourses = ({data , paginationArray , PageNum , setPageNum}) => {
 

  
  const setFiltershow = useSelector(state=>state.setFiltershow.setFiltershow)
  const cardSize=setFiltershow?`w-[22rem]`:`w-[24rem]`
  
 

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
      <div className="flex flex-row justify-center items-center gap-2 font-[24px] text-center">
      {paginationArray?.length>0 && paginationArray?.map(item => {
          return(
            <div  className="border-2 hover:bg-violet-300 w-[40px] h-[40px] cursor-pointer" onClick={() => setPageNum(item)}>{item}</div>
          )
        }) }
      </div>
     </div>
    </>
  );
};
