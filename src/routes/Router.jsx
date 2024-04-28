import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";

const routes = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<About/>
        },
        {
          path:"/login",
          element:<Login/>,
          children:[
            {
              path:"tab1",
              element:<Tab1/>
            },
            {
              path:"tab2",
              element:<Tab2/>
            },          
          ]
  
        }
      ]
  
    },
    
  
  ]) 

const Router = () => {
    return ( 
        <RouterProvider router={routes}/>

     );
}
 
export default Router;