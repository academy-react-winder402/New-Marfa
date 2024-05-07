import profileimage from "../../assets/image/profile.png"
const ProfileImage = () => {
    return ( 
    <div className="w-full h-1/3 mt-10 mb-4 border-b-1 border-gray-400 pb-6 ">
        <img src={profileimage} className="mx-auto  outline outline-2 outline-offset-[6px] outline-white rounded-full w-[10rem] h-[10rem]"></img>
    </div>
     );
}
 
export default ProfileImage;