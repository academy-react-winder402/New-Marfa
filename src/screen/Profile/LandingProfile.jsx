import { useEffect } from "react";
import { Dashboard } from "../../component/ProfileComponent/Dashboard/Dashboard";
import { clearStorage, getItem } from "../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";


const LandingProfile = () => {
 

    return (
      <div className="w-full h-full">
        <Dashboard />
        
      </div>
      );
}
 
export default LandingProfile;