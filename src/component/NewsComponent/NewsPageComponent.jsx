import React from 'react'
import Topheaderseconde from '../CourseComponent/Topheaderseconde'
import ItemFilterNews from '../NewsDetailsComponent/ItemFilterNews'
import CardNews from '../LandingComponent/News/CardNews'
import DataNews from '../NewsDetailsComponent/DataNews.json'


const NewsPageComponent = () => {
  
  return (

    <div  className= "w-full bg-bluec">
     
       <div className="bg-[#D7D5FF] shadow-2xl shadow-bg-bluec mx-auto max-w-[1920px]">
       {/* <div className='absolute'>
      <svg className='top-0 left-0 absolute w-full' width="full" height="1242" viewBox="0 0 1440 1242" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1440V754.717L0 1242V0Z" fill="#B0B0FC"/>
     </svg>

      </div> */}
          
          <Topheaderseconde className=""/>
          <ItemFilterNews className=""/>
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
export default NewsPageComponent
