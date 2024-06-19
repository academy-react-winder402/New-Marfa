import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { CardItem } from "../../../../common/Cource/CardItem";
import pic1 from "../../../../assets/image/profesor/p1.jpg";
import pic2 from "../../../../assets/image/profesor/p2.jpeg";
import pic3 from "../../../../assets/image/profesor/p3.jpg";
import NoImagePerson from "../../../../assets/image/profile/person.png";
import { useQuery } from "react-query";
import http from "../../../../core/services/interceptore";
import deskImage from '../../../../assets/image/svg/Rectangle 90.svg'


export const DetailMaster = ({id }) => {

  const professorpic = [pic1, pic2, pic3];
  
// ********************COURSE API FETCH**********************
  const getCourseList = async () => {
    const res = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=8&SortingCol=Active&SortType=DESC&TechCount=0`
    );
    return res;
  };

  const {
    data: masterList,
    isLoading: masterIsLoading ,
    isError: masterIsError,
    error: masterError,
    refetch: masterRefetch
  } = useQuery("courseListmaster", getCourseList);
  
  // *******************TEACHER API FETCH*************************
  const getMasterDetail = async () => {
    const respon = await http.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
    return respon;
  };

  const { data, isLoading, isError, error } = useQuery(
    "masterDetail1",
    getMasterDetail
  );
  // ********************************************
  const img = data?.pictureAddress
  const noImage =   img === "Not-set" || img === undefined || img === null;

  return (
    <div className="dark:bg-violet-950 bg-[#B4B4FF] dark:shadow-2xl dark:shadow-violet-600 shadow-violet-400 rounded-lg w-[100%] px-1 mx-auto max-w-[1920px] bg-cover bg-no-repeat" >
      <div className="pt-10 md:flex md:flex-row-reverse gap-5 mx-auto text-violet-500 w-[95%]">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="mx-auto md:w-[30%]"
        >
          <h2 className="text-center mt-10 text-[40px] text-nowrap">
            {data?.fullName}
          </h2>
          <div className="max-w-[301px] md:w-[200px] md:h-[200px] lg:w-[301px] lg:h-[301px] w-[301px] h-[301px] my-10 rounded-full ring-8 ring-violet-700 mx-auto">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="z-50 lg:w-[301px] lg:h-[301px] max-w-[301px] md:w-[200px] md:h-[200px] w-[300px] h-[300px] rounded-full "
              src={noImage ? NoImagePerson : pic1}
            />
          </div>
          <div className="w-[95%] text-center mx-auto flex justify-center rounded-lg py-5 text-[20px] bg-violet-300">
            مهندس نرم افزار
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          className="md:w-[65%] mx-auto p-10 mt-10 shadow-lg shadow-violet-400 rounded-lg"
        >
          <h2 className="text-[30px] font-bold">تجربه ها :</h2>
          <p className="text-[26px]">
            استاد  {data?.fullName} از اساتید با تجربه و کار بلد تیم مارفا هستند. استاد
            {data?.fullName} از اساتید با تجربه و کار بلد تیم مارفا هستند. استاد {data?.fullName}
          </p>
          <div className="h-[2px] bg-gray-400 w-[100%] my-5 mx-auto"></div>
          <h2 className="text-[30px] font-bold">راه های ارتباطی : {data?.linkdinProfileLink}</h2>
          <div>
            <FaLinkedin />
          </div>
          <div className="h-[2px] bg-gray-400 w-[100%] my-5 mx-auto"></div>
          <div className="mb-5 text-[30px] font-bold">
            <span>تعداد دوره ها : </span>
            <span> {data?.courseCounts}</span>
          </div>
          <div className="text-[30px] font-bold">
            <span> تعداد مقالات : </span>
            <span> {data?.newsCount}</span>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto">
        <h2 className="mr-20  text-violet-500 mt-10 text-[30px] font-bold">
          دوره های پیشنهادی استاد :
        </h2>
        <div className="flex flex-wrap gap-3 mx-auto">
          {masterList?.courseFilterDtos.map((result, index) => {
            return (
              //   <div key={index} className="w-[33%] max-w-[310px]">
              <div
                key={index}
                className="md:w-[45%] lg:w-[30%] sm:w-[95%]  max-w-[350px] bg-violet-50 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 mt-4 mb-10 p-[1rem] rounded-[0.9375rem] mx-auto"
              >
                <CardItem
                  id={result.courseId}
                  title={result.title}
                  img={result.tumbImageAddress}
                  sectionCours={result.sectionCours}
                  timeCours={result.statusName}
                  calender={result.lastUpdate}
                  master={result.teacherName}
                  like={result.likeCount}
                  dislike={result.dissLikeCount}
                  priceCourse={result.cost}
                  countStudio={result.levelName}
                  currentRegistrants={result.currentRegistrants}
                  userFavorite={result.userFavorite}
                  userFavoriteId={result.userFavoriteId}
                  userIsLiked={result.userIsLiked}
                  userLikedId={result.userLikedId}
                  currentUserDissLike={result.currentUserDissLike}
                  refetch={masterRefetch}
                />
              </div>
              //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
