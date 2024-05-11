import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";
import Landing from "../screen/Landing/Landing";
import NewsPage from "../screen/NewsPage/NewsPage";
import { Login } from "../screen/Loginpage/Login";
import Register from "../screen/Register/Register";
import Forget from "../screen/Forget/Forget";
import LayoutProfile from "./LayoutProfile";
import LandingProfile from "../screen/Profile/LandingProfile";
import LayoutLogin from "./LayoutLogin";
import ChangePass from "../component/ProfileComponent/ChangPass";
import UserAccount from "../component/ProfileComponent/UserAccount";
import { Courses } from "../screen/Cources/Courses";
import { CourcesDetailPage } from "../screen/CourcesDetail/CourcesDetailPage";
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
          path:"/CourcesDetailPage/:id",
          element:<CourcesDetailPage/>
        },   
        {
          path:"/news",
          element:<NewsPage />
        }
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
          element:<LandingProfile />
        }
      ]
    },
    {
      path: "/login",
      element:<LayoutLogin />,
      children:[
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/login/register",
          element:<Register />
        },
        {
          path:"/login/forget",
          element:<Forget />
        }
      ]
    }
  ]) 
const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
