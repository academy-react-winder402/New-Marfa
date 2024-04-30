import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";
import Landing from "../screen/Landing/Landing";
import Courses from "../screen/Cources/Courses";
import { Logo } from "../component/header/Logo";
import { Login } from "../screen/Login/Login";

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
        {
          path:"/login",
          element:<Login/>
        },       

      ]
  
    },
    
  
  ]) 

const Router = () => {
    return ( 
        <RouterProvider router={routes}/>

     );
}
 
export default Router;