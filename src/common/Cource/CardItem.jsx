import React, { useState } from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/image/Images-for-null 2.svg";
import { getItem } from "../../localStorage/localStorage";
import http from '../../core/services/interceptore'

export const CardItem = ({
  id,
  title,
  img,
  countStudio,
  sectionCours,
  timeCours,
  calender,
  master,
  like,
  dislike,
  priceCourse,
  currentRegistrants,
  userFavorite,
  userFavoriteId,
  refetch,
  userIsLiked,
  userLikedId,
  currentUserDissLike
}) => {


// FUNCTION


  const token = getItem('token');

  // ********************

  const handleFavourite = async() => {
    if(!userFavorite){
      const res = await http.post('/Course/AddCourseFavorite' ,{courseId:id} )
      refetch()
    }
    else{
      // const obj ={CourseFavoriteId:userFavoriteId}
      const data = new FormData()
      data.append('CourseFavoriteId' , userFavoriteId)
      const res1= await http.delete('/Course/DeleteCourseFavorite' , {data:data})
      refetch()
    }

  }
 //******************************************* 
  const handleLike =async() => {
    if(!userIsLiked){
      const res2 = await http.post(`/Course/AddCourseLike?CourseId=${id}` )
      refetch()
    }
    else{
      // const obj ={CourseLikeId:userLikedId}
      const data = new FormData()
      data.append('CourseLikedId' , userLikedId)
      const res1= await http.delete('/Course/DeleteCourseLike' , {data:data})
      refetch()
    }


  }



  const handleDisLike = async() => {
    if(!currentUserDissLike){
      const res = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`)
      refetch()
    }
    else{
    //   const obj ={CourseFavoriteId:userFavoriteId}
      const data = new FormData()
      data.append('CourseFavoriteId' , userFavoriteId)
      const res1= await http.delete('/Course/DeleteCourseFavorite' , {data:data})
      refetch()
    }
  }
  

  const noImage = img === null || img === "undefined" || img === "";
  
  return (
    
      <div className="relative w-full group">
        <div>
          <div className="mx-auto mb-5 w-full">
            <img
              className="mx-auto rounded-lg w-[310px] h-[175px] object-fill border-2 bg-violet-300"
              src={noImage ? notFound : img}
              alt=""
            />
          </div>
          <Link to={`/courses/${id}`}>
          
          <div className="mb-5 h-9 text-[1.25rem] text-start dark:text-violet-200 leading-[1.25rem]">
            {title}
          </div>
          </Link>
          <div className="flex flex-row justify-between h-auto text-[0.625rem] text-slate-500 dark:text-violet-200 leading-[0.625rem]">
            <span className="flex flex-row gap-2">
              {countStudio}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 
                  6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 
                  0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 
                  2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 
                  12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
            </span>
            <span className="flex flex-row gap-2">
              {timeCours}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span className="flex flex-row gap-2">
              {calender}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
          </div>
          <div className="mt-8 divide-y-2 divide-slate-200 text-slate-500 text-xs">
            <div className="flex flex-row-reverse justify-between mb-5 dark:text-violet-200">
              <div className="flex flex-row gap-2">
                {master}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div className="flex gap-2">
                <span className="flex flex-row justify-center items-center gap-2 cursor-pointer
                 bg-slate-200 dark:bg-violet-500 rounded-[0.3125rem] w-[3.125rem] h-[1.625rem]">
                  {like}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={userIsLiked ? `gray` :`none`}
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke={userIsLiked ? `gray` :`currentColor`}
                    class="w-4 h-4"
                    onClick={handleLike}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                </span>
                <span className="flex flex-row justify-center items-center gap-2 cursor-pointer
                 bg-slate-200 dark:bg-violet-500 rounded-[0.3125rem] w-[3.125rem] h-[1.625rem]">
                  {dislike}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={currentUserDissLike ?`gray` :`none`}
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke={currentUserDissLike ?`gray` :`currentColor`}
                    class="w-4 h-4"
                    onClick={handleDisLike}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-between pt-5">
              <div className="flex gap-4 dark:text-violet-200">
                <span className="text-[1rem] leading-[1rem]">تومان</span>
                <span className="flex text-[1.25rem] text-violet-700 dark:text-violet-200 leading-[1.25rem]">
                  {priceCourse}
                </span>
              </div>
              <div className="flex flex-row gap-2 dark:text-violet-200">
                {currentRegistrants}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={`group-hover:visible top-[-1px] left-[-16px] z-20 absolute bg-sky-200 cursor-pointer  dark:shadow-lg dark:shadow-violet-600 p-1 rounded-tr-lg rounded-br-lg w-12 invisible`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={userFavorite ?`red` :`none`}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={userFavorite ?`red` :`currentColor`}
            className="size-6 cursor-pointer"
            onClick={handleFavourite}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>
    
  );
};
