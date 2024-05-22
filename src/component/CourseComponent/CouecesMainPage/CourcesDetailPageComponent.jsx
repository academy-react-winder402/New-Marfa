import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AllUsersComment from "../../CourcesDetailComponent/AllUsersComment";
import CoursProudactComponents from "../../CourcesDetailComponent/CoursProudactComponents";
import CourseProudactMenuTabUL from "../../CourcesDetailComponent/CourseProudactMenuTabUL";
import OrderCourseComponent from "../../CourcesDetailComponent/OrderCourseComponent";
import handleTheme from "../../../core/services/handleTheme";
import { useQuery } from "react-query";
import axios from "axios";




export const CourcesDetailPageComponent = () => {

  useEffect(() => {
    handleTheme();
  }, []);
  const params  = useParams()

  const x = document.documentElement.classList


  //  const getCourseDetail =async() => {
  //   const res = await axios.get(`https://classapi.sepehracademy.ir/api/Home/GetCourseDetails?CourseId=${params.id}`)
  //   console.log(res.data);
  //   return res.data
  //  }

  //   const {data , isLoading ,isError , error} = useQuery("courseDetail1", getCourseDetail)
    
    return (
        
          <div className="bg-bluec w-full">
            <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
             <CoursProudactComponents/>
              <CourseProudactMenuTabUL/>
              {/* <UserCommentComponent/> */}
              <AllUsersComment/>
              <OrderCourseComponent/>
            </div>
          </div>
         
    );
  };