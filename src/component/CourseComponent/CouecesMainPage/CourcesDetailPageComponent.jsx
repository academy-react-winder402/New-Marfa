import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AllUsersComment from "../../CourcesDetailComponent/AllUsersComment";
import CoursProudactComponents from "../../CourcesDetailComponent/CoursProudactComponents";
import CourseProudactMenuTabUL from "../../CourcesDetailComponent/CourseProudactMenuTabUL";
import OrderCourseComponent from "../../CourcesDetailComponent/OrderCourseComponent";
import handleTheme from "../../../core/services/handleTheme";
import { useQuery } from "react-query";
import axios from "axios";
import { getList } from "../../../function/getList";
import { useEffect } from "react";





export const CourcesDetailPageComponent = () => {
<<<<<<< HEAD
    const params  = useParams()
    
    const {data , isLoading ,isError , error} = useQuery("courseList2",
       () => getList(`/Home/GetCourseDetails?CourseId=${params.id}`))
=======

  useEffect(() => {
    handleTheme();
  }, []);
  const params  = useParams()
>>>>>>> 7911b6104fc1a49e577937a10b9261d45016229c

  
  


  //  const getCourseDetail =async() => {
  //   const res = await axios.get(`https://classapi.sepehracademy.ir/api/Home/GetCourseDetails?CourseId=${params.id}`)
  //   console.log(res.data);
  //   return res.data
  //  }

  //   const {data , isLoading ,isError , error} = useQuery("courseDetail1", getCourseDetail)
    
    return (
        
          <div className="bg-bluec w-full">
            <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
             <CoursProudactComponents data={data && data}/>
              <CourseProudactMenuTabUL/>
              {/* <UserCommentComponent/> */}
              <AllUsersComment/>
              <OrderCourseComponent/>
            </div>
          </div>
         
    );
  };