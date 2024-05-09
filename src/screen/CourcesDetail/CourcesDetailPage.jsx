import AllUsersComment from "../../component/CourcesDetailComponent/AllUsersComment";
import CoursProudactComponents from "../../component/CourcesDetailComponent/CoursProudactComponents";
import CourseProudactMenuTabUL from "../../component/CourcesDetailComponent/CourseProudactMenuTabUL";
import OrderCourseComponent from "../../component/CourcesDetailComponent/OrderCourseComponent";




export const CourcesDetailPage = () => {
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