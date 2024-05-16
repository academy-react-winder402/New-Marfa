import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './style.css'
import Data from "../../CourseComponent/Data.json"
// import required modules
import { Pagination } from "swiper/modules";
import html from '../../../assets/image/3.jpg'
import { CardItem } from "../../../common/Cource/CardItem";

export const SwipperComponent = () => {
  // const Data = [
  //   {
  //     id: 1,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 2,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 3,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 4,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 5,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 6,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 7,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  //   {
  //     id: 8,
  //     img: html,
  //     title: "html آموزش مقدماتی",
  //     sectionCours: "199",
  //     timeCours: "14 ساعت",
  //     calender: "آذر 1402",
  //     master: "بحرالعلوم",
  //     like: "32",
  //     disLike: "2",
  //     priceCourse: "500000",
  //     countStudio: "257",
  //   },
  // ];

  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="">
          {Data.map((result, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[310px]">
                  <div className="bg-violet-50 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 mt-4 mb-10 p-[1rem] rounded-[0.9375rem]">
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
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      {/* <div className="flex justify-center mt-10 mb-5 h-10">
        <button className="bg-blue-700 p-2 rounded-[0.9375rem] text-white text-xl">
          مشاهده همه
        </button>
      </div> */}
    </>
  );
};
