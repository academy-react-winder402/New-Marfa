import React from 'react'

import ItemFilterNews from '../../component/NewsDetailsComponent/ItemFilterNews'
import Topheaderseconde from '../../component/CourseComponent/Topheaderseconde'
import DataNews from '../../component/NewsDetailsComponent/DataNews.json'
import CardNews from '../../component/LandingComponent/News/CardNews'


const NewsMaineScreen = () => {
  
  return (
    <div  className="bg-bluec w-full">
       <div className="bg-[#D7D5FF] shadow-2xl shadow-bg-bluec mx-auto max-w-[1920px]">
          <Topheaderseconde/>
          <ItemFilterNews/>
          <div className='flex flex-col justify-center items-center mx-auto px-5 w-[90%]' >
            {DataNews.map((item) => {
            return(
            <div  className='w-[90%]' key={item.id}> 
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
      </div>
    </div>
  )
}
export default NewsMaineScreen
