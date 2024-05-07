import { Outlet } from "react-router-dom";
import { Login } from "../screen/Loginpage/Login";

const LayoutLogin = () => {
    return ( 
        <>
            <div>
                
                <Outlet />
            </div>
        </>
     );
}
 
export default LayoutLogin;