import { useEffect, useState, useRef } from "react";
import { Cardcomponentcourses } from "../Cardcomponentcourses";
import Filtercourses from "../Filtercourses";
import Titelmenulist from "../Titelmenulist";
import Topheaderseconde from "../Topheaderseconde";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import http from "../../../core/services/interceptore";
import { CardItem } from "../../../common/Cource/CardItem";

export const CoursesComponent = () => {

  const setFiltershow =useSelector(state => state.setFiltershow.setFiltershow)
  const [showType , setShowType]= useState(true)
  const show = setFiltershow  ? `md:w-[20%]` : `md:w-0`;
  const cardWidth = setFiltershow  ? `md:w-[70%]` : `md:w-[100%]`;
  // const pageNumber = setFiltershow ? `6` : `8`
 
  const [PageNum, setPageNum] = useState(1);
  const [paginationSize, setpaginationSize] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [paginationArray, setPaginationArray] = useState(null);

  const getCourseList = async () => {
    const res = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${PageNum}&RowsOfPage=6&SortingCol=Active&SortType=DESC${searchQuery}&TechCount=0`
    );
    return res;
  };

  const { data, isLoading, isError, error } = useQuery(
    ["courseList1", PageNum, searchQuery],
    getCourseList,
    {
      onSuccess: (data) => {
        setpaginationSize(Math.ceil(data.totalCount / 6));
      },
    }
  );

  var pageArr = [];

  useEffect(() => {
    for (let i = 1; i <= paginationSize; i++) {
      pageArr.push(i);
    }
    setPaginationArray(pageArr);
  }, [paginationArray]);

  const ref = useRef();

  const handleSearch = (e) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      e.target.value && setSearchQuery(`&Query=${e.target.value}`);
    }, 800);
    !e.target.value && setSearchQuery(``);
  };

  return (
    <div className="z-50 bg-bluec w-full">
      <div className="bg-[#D7D5FF] dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
        <Topheaderseconde />
        <Titelmenulist
          handleSearch={handleSearch}
          showType={showType}
          setShowType={setShowType}
        />
        <div className="flex flex-row flex-nowrap justify-center mx-auto w-[85%] h-full">
          <div
            className={` lg:block w-0  flex md:item-between mx-auto ${show}`}>
            <Filtercourses />
          </div>
          <div className={`flex flex-row flex-wra mx-auto  w-full ${cardWidth} `}>
            <Cardcomponentcourses
              data={data && data}
              paginationArray={paginationArray && paginationArray}
              PageNum={PageNum}
              setPageNum={setPageNum}
              showType={showType}
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};
