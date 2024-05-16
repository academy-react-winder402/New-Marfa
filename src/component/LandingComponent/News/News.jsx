import CardNews from "./CardNews";
import DataNews from "../../NewsDetailsComponent/DataNews.json";
import TitrComponent from "../../../common/TitrComponent/TitrComponent";
import AllButton from "../../../common/button/AllButton";
import { Link } from "react-router-dom";
import DesignSvgComponent from "../../SvgComponent/DesignSvgComponent";



const News = () => {
  return (
      <div className="relative dark:bg-violet-950 mt-48 w-full">
        <DesignSvgComponent className=""/>
        <TitrComponent title=" اخبار و مقالات "/>
        
        <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5 mx-auto w-full md:w-[95%]">
         
          {DataNews.map((item ,index) => {if(index <2)
            return(
            <div  className='z-10 w-[95%] md:w-[45%]'  key={item.id}> 
              <CardNews 
              title={item.title}
              img={item.img}
              view={item.view}
              date={item.date}
              description={item.description}
              />

            </div>
            )
          })}
         
        </div>
       
        <Link to="/news"><AllButton title="نمایش بیشتر " /></Link>
      </div>

  );
};

export default News;
