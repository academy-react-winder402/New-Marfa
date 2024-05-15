import AllUsersComment from "../../CourcesDetailComponent/AllUsersComment";
import CoursProudactComponents from "../../CourcesDetailComponent/CoursProudactComponents";
import CourseProudactMenuTabUL from "../../CourcesDetailComponent/CourseProudactMenuTabUL";
import OrderCourseComponent from "../../CourcesDetailComponent/OrderCourseComponent";




export const CourcesDetailPageComponent = () => {
    return (
        
          <div className="bg-bluec w-full">
            <div className="bg-[#D7D5FF] shadow-2xl shadow-bg-bluec mx-auto max-w-[1920px]">
             <CoursProudactComponents/>
              <CourseProudactMenuTabUL/>
              {/* <UserCommentComponent/> */}
              <AllUsersComment/>
              <OrderCourseComponent/>
            </div>
          </div>
         
    );
  };