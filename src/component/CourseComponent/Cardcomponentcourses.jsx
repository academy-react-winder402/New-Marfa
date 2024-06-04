import Data from "../CourseComponent/Data.json"
import { CardItem } from "../../common/Cource/CardItem";
import { useQuery } from "react-query";
import axios from "axios";
import http from "../../core/services/interceptore"
import { getList } from "../../function/getList";
import { useEffect, useState } from "react";

export const Cardcomponentcourses = ({data , paginationArray , PageNum , setPageNum}) => {
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
      <button onClick={() => setPageNum(PageNum+1)}>nextpage </button>
        {paginationArray?.length>0 && paginationArray?.map(item => {
          return(
            <div className='' onClick={() => setPageNum(item)}>{item}</div>
          )
        }) }
    </>
  );
};
