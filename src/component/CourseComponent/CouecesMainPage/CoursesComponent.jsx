import React, { useEffect, useRef, useState } from "react";
import { Cardcomponentcourses } from "../Cardcomponentcourses";
import Filtercourses from "../Filtercourses";
import Titelmenulist from "../Titelmenulist";
import Topheaderseconde from "../Topheaderseconde";
import { useSelector } from 'react-redux';
import CardNews from "../../LandingComponent/News/CardNews";
import http from '../../../core/services/interceptore'
import { useQuery } from "react-query";
import { CardItem } from "../../../common/Cource/CardItem";


export const CoursesComponent = () => {


  const setFiltershow = useSelector(state=>state.setFiltershow.setFiltershow)
  const [showType , setShowType] = useState(true)
  const show = setFiltershow ? `w-[20%]` : `w-0`
  const cardWidth = setFiltershow ? `md:w-[70%]` : `md:w-[100%]`

  const [PageNum, setPageNum] = useState(1);
  const [paginationSize, setpaginationSize] = useState(null);
  const [searchQuery , setSearchQuery] =useState('')  
  const [paginationArray , setPaginationArray] =useState('')  


  const getCourseList =async() => {
    const res = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${PageNum}&RowsOfPage=6&SortingCol=Active&SortType=DESC${searchQuery}&TechCount=0`)
    //console.log(res.data.courseFilterDtos);
    return res
   }

   
   const {data , isLoading ,isError , error} = useQuery(["courseList1",PageNum,searchQuery],getCourseList,
    
   {
     onSuccess:(data)=>{
       setpaginationSize(Math.ceil(data.totalCount/6))
     }
   })


   var pageArr=[]
    useEffect(() => {
      for(let i=1 ; i<=paginationSize ;i++){
        pageArr.push(i)
        setPaginationArray(pageArr)
      }
    },[]);

  const ref = useRef();
  const handleSearch = (e)=>{
    clearTimeout(ref.current)
    const timeOut = setTimeout(()=>{
      e.target.value && setSearchQuery(`&Query=${e.target.value}`) 
     },800)
     !e.target.value && setSearchQuery('')
    ref.current = timeOut
        // console.log(e.target.value);
        // setSearchQuery(`&Query=${e.target.value}`)
        // if(!e.target.value){
        //   setSearchQuery('')
        // }
  }

  return (
    
    <div className="z-50 bg-bluec w-full">
     <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
      
      <Topheaderseconde />
      <Titelmenulist  handleSearch={handleSearch} showType={showType} setShowType={setShowType}/>
      <div className='flex flex-row flex-nowrap justify-center items-center mx-auto w-[90%] h-full'>
      <div  className={`lg:inline-block flex md:item-between md:mr-10 ${show}`}>
        <Filtercourses/>
      </div> 

      {showType ?  <div className={`flex flex-row flex-wrap w-full ${cardWidth} `}>
      <Cardcomponentcourses data={data && data} paginationArray={paginationArray && paginationArray} 
      PageNum={PageNum} setPageNum={setPageNum}/> 
      </div> : <CardItem/>} 

     
      </div>

     </div>

    </div>
    
  );
};
