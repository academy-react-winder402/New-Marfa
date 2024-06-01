import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "../screen/Landing/Landing";
import NewsPage from "../screen/NewsPage/NewsPage";
import { Login } from "../screen/Loginpage/Login";
import Register from "../screen/Register/Register";
import Forget from "../screen/Forget/Forget";

import LandingProfile from "../screen/Profile/LandingProfile";

import ChangePass from "../component/ProfileComponent/ChangPass";
import UserAccount from "../component/ProfileComponent/UserAccount";
import { TableSelectedCourse } from "../component/ProfileComponent/TableSelectedCourse";
import NewsDitailsPage from "../screen/NewsPage/NewsDetailsPage";
import Courses from "../screen/Cources/Courses";
import { CourcesDetailPageComponent } from "../component/CourseComponent/CouecesMainPage/CourcesDetailPageComponent";
import LayOut from "../LayOut/Layout";
import LayoutProfile from '../LayOut/LayoutProfile'
import LayoutLogin from '../LayOut/LayoutLogin'

const routes = createBrowserRouter([

    {
      path: "/",
      element:<LayOut/>,
      children:[
        {
          path:"/",
          element:<Landing/>
        },
        {
          path:"/courses",
          element:<Courses />
        }, 
        {
          path:"/courses/:id",
          element:<CourcesDetailPageComponent/>
        },   
        {
          path:"/news",
          element:<NewsPage />
        },
        {
          path:"/news/:id",
          element:<NewsDitailsPage />
        },
      ]
    },

    
    {
      path: "/profile",
      element:<LayoutProfile />,
      children:[
        {
          path:"/profile",
          element:<LandingProfile />
        },
        {
          path:"/profile/useracount",
          element:<UserAccount />
        },
        {
          path:"/profile/changePass",
          element:<ChangePass />
        },
        {
          path:"/profile/myselected",
          element:<TableSelectedCourse />
        }
      ]
    },
    {
      path: "/auth",
      element:<LayoutLogin />,
      children:[
        {
          path:"/auth/login",
          element:<Login />
        },
        {
          path:"/auth/register",
          element:<Register />
        },
        {
          path:"/auth/forget",
          element:<Forget />
        }
      ]
    }
  ]) 
const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
