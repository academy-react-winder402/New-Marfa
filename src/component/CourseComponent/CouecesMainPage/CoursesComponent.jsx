import React, { useEffect, useState , useRef } from "react";
import { Cardcomponentcourses } from "../Cardcomponentcourses";
import Filtercourses from "../Filtercourses";
import Titelmenulist from "../Titelmenulist";
import Topheaderseconde from "../Topheaderseconde";
import http from '../../../core/services/interceptore'
import { useQuery } from "react-query";

export const CoursesComponent = () => {
  const [PageNum, setPageNum] = useState(1);
  const [paginationSize, setpaginationSize] = useState(null);
  const [searchQuery , setSearchQuery] =useState('')
  const [paginationArray , setPaginationArray] = useState(null)


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

   var pageArr = []

   


  

   
    useEffect(() => {
      for(let i=1 ; i<=paginationSize ;i++){
        pageArr.push(i)
        setPaginationArray(pageArr)
      }
     }, []);


  const ref = useRef()
  var x


    const handleSearch = (e)=>{
      clearTimeout(ref.current)
       ref.current = setTimeout(() => {
        e.target.value &&  setSearchQuery(`&Query=${e.target.value}`)
        
      }, 800);

      !e.target.value && setSearchQuery(``)
      
      // setSearchQuery(`&Query=${e.target.value}`)
      // if(!e.target.value){
      //   setSearchQuery('')
      // }
    }


    // const myRef = useRef()

    // const handl= () => {
    //   myRef.current.style.color = "red"
    // }


  return (
    
    <div  className="z-50 bg-bluec w-full">
     <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
      
      <Topheaderseconde />
      <Titelmenulist handleSearch={handleSearch}/>
      <div className='flex flex-row flex-nowrap justify-center items-center mx-auto w-[90%] h-full'>
      <div  className="lg:inline-block flex  md:item-between md:mr-10 md:w-[20%]">
        <Filtercourses/>
        </div> 
      <div className="flex flex-row flex-wrap w-full md:w-[70%]">
        <Cardcomponentcourses data={data && data} paginationArray={paginationArray && paginationArray} PageNum={PageNum} setPageNum={setPageNum}/> 
        </div> 
      </div>

     </div>

    </div>
    
  );
};
