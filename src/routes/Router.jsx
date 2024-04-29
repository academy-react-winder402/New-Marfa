import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";
import Landing from "../screen/Landing/Landing";

const routes = createBrowserRouter([
    {
      path: "/",
      element:<LayOut/>,
      children:[
        {
          path:"/",
          element:<Landing/>
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