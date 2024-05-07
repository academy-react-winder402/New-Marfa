import { Outlet } from "react-router-dom";
import ChangePass from "../component/ProfileComponent/ChangPass";
import LeftMenu from "../component/ProfileComponent/LeftMenu";
import TopMenu from "../component/ProfileComponent/TopMenu";
import UserAccount from "../component/ProfileComponent/UserAccount";

const LayoutProfile = () => {
    return ( 
        <>
            <div className="w-full bg-bluec h-screen">
                <div className="shadow-2xl shadow-[#d7d5ff] pt-5 w-fit mx-auto m-w-[1920px]">

                {/* [#d7d5ff]  */}
                        <div className="w-[95%] flex flex-col gap-3 mx-auto justify-center pt-6 md:flex-row">
                            <div className="hidden lg:block lg:w-[22rem] bg-gradient-to-b from-[#8C80F6] to-[#2E11B7] rounded-xl ">
                                <LeftMenu />
                            </div>
                            <div className="rounded-xl bg-white flex flex-col">
                                <div className=" h-[4rem] pt-3 mb-4 ">
                                    <TopMenu />
                                </div>
                                <div className=" h-[1px] bg-gray-400 mx-auto "></div>
                                <div className="w-full mb-2 ">
                                    {/* <ChangePass /> */}
                                    <Outlet />
                                    {/* <UserAccount /> */}
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
        

        </>
     );
}
 
export default LayoutProfile;