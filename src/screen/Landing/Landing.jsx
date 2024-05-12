import { Card } from "../../common/Cource/Card";
import CategoryCard from "../../component/LandingComponent/Categoryfill/CategoryCard";
import News from "../../component/LandingComponent/News/News";
import Professors from "../../component/LandingComponent/Professors/Professors";
import { Service } from "../../component/LandingComponent/Services/Service";
import { Toplanding } from "../../component/LandingComponent/TopLanding/Toplanding";


const Landing = () => {
    return ( 
        <div  className="z-0 bg-bluec w-full h-auto">
            
            {/* section one Top Landing*/}
            <Toplanding/>

            {/* section Two Services*/}
            <Service/>

            {/* section Three Cource Cart in landing*/}
            <Card/>
            

            {/* section four Category in landing*/}
            <CategoryCard/>

            {/* section Five Professor in landing*/}
            <Professors/>

            {/* section six News in landing*/}
            <News/>

        </div>
     );
}
 
export default Landing;