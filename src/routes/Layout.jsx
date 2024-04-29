import { Outlet } from "react-router-dom";
import { Nav } from "../component/header/Nav";

const LayOut = () => {
    return ( 
        <>
           <Nav />
            <Outlet/>
            Footer
        </>
     );
}
 
export default LayOut;