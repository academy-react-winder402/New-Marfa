import React from 'react'
import Topheaderseconde from '../CourseComponent/Topheaderseconde'
import CardNews from '../LandingComponent/News/CardNews'
import DataNews from '../NewsDetailsComponent/DataNews.json'
import ItemFilterNews from '../NewsDetailsComponent/SortFilterItem/ItemFilterNews'
import { useQuery } from 'react-query'
import { getList } from '../../function/getList'


const NewsPageComponent = () => {
      const {data , isLoading ,isError , error} = useQuery("newsList1",
      () => getList("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC"))
  
  return (
    <div  className= "w-full bg-bluec">
       <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
       {/* <div className='absolute'>
      <svg className='top-0 left-0 absolute w-full' width="full" height="1242" viewBox="0 0 1440 1242" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1440V754.717L0 1242V0Z" fill="#B0B0FC"/>
     </svg>

      </div> */}
          
          <Topheaderseconde className=""/>
          <ItemFilterNews className=""/>
          <div className='flex flex-col justify-center items-center mx-auto px-5 w-[90%]' >
            {data?.news.map((item) => {
            return(
            <div  className='w-[90%]' key={item.id}> 
              <CardNews 
              title={item.title}
              img={item.currentImageAddressTumb}
              view={item.currentView}
              date={item.updateDate}
              description={item.miniDescribe}
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
