import html from "../../../assets/image/3.jpg"
import { DashboardButtomComponent } from "./DashboardButtomComponent";
import { DashboardTopComponent } from "./DashboardTopComponent";
import http from '../../../core/services/interceptore'
import { useQuery } from "react-query";

export const Dashboard = () => {
  const Data = [
    {
      id: 1,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
    },
    {
      id: 2,
      img: html,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "500000",
    },
  ];


  const getProfile = async() => {
    const res= await http.get('/SharePanel/GetProfileInfo')
    return res
  }

  const {data } = useQuery('myProfile' , getProfile)

  data && console.log(data);
  return (
    <div className="bg-white 2xl:w-[72rem]">
      <DashboardTopComponent/>
      <div className="flex md:flex-row justify-center flex-col text-xs ">
        <div className="">
          <h2 className="flex text-2xl mb-5">ـاخری دوره ثبت شده</h2>
          <div className="w-[97%]">
            {Data.map((result, index) => {
              return (
                <DashboardButtomComponent
                  key={index}
                  title={result.title}
                  img={result.img}
                  master={result.master}
                  priceCourse={result.priceCourse}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="flex text-2xl mb-5">ـدوره های پیشنهادی</h2>
          <div className="w-[97%]">
            {Data.map((result, index) => {
              return (
                <DashboardButtomComponent
                  key={index}
                  title={result.title}
                  img={result.img}
                  master={result.master}
                  priceCourse={result.priceCourse}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
