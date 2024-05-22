import { useEffect } from "react";
import AllUsersComment from "../../CourcesDetailComponent/AllUsersComment";
import CoursProudactComponents from "../../CourcesDetailComponent/CoursProudactComponents";
import CourseProudactMenuTabUL from "../../CourcesDetailComponent/CourseProudactMenuTabUL";
import OrderCourseComponent from "../../CourcesDetailComponent/OrderCourseComponent";
import handleTheme from "../../../core/services/handleTheme";




export const CourcesDetailPageComponent = () => {

  useEffect(() => {
    handleTheme();
  }, []);
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