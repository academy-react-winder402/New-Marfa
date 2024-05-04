import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";
import Landing from "../screen/Landing/Landing";
import Courses from "../screen/Cources/Courses";

import { Login } from "../screen/Loginpage/Login";
import Register from "../screen/Register/Register";
import Forget from "../screen/Forget/Forget";

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
          element:<Courses/>
        }, 
            
      ]
    },
<<<<<<< HEAD
    
    
  
=======
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/forget",
      element:<Forget />
    }
>>>>>>> 1aa28b7b59dd1339e628302a735f846d073cd2a3
  ]) 

const Router = () => {
    return ( 
        <RouterProvider router={routes}/>

     );
}
 
export default Router;