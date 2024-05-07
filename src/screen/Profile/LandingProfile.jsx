import ProfileImage from "../../component/ProfileComponent/ProfileImage";
import UserAccount from "../../component/ProfileComponent/UserAccount";

const LandingProfile = () => {
    return (
      <div className="w-[40rem] md:w-[48rem] lg:[64rem] xl:[80rem] 2xl:[96rem] mx-auto">
        <ProfileImage />
        <div className="text-center">سلام آرزوی  عزیز</div>
      </div>
      );
}
 
export default LandingProfile;