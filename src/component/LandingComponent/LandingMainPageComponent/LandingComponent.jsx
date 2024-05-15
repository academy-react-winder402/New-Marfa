import { Card } from "../../../common/Cource/Card";
import CategoryCard from "../Categoryfill/CategoryCard";
import News from "../News/News";
import Professors from "../Professors/Professors";
import { Service } from "../Services/Service";
import { Toplanding } from "../TopLanding/Toplanding";


const LandingComponent = () => {
    return ( 
        <div  className="z-0 bg-bluec shadow-2xl shadow-bg-bluec w-full h-auto">
            
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
 
export default LandingComponent;