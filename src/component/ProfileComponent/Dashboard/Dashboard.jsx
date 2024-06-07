import { DashboardButtomComponent } from "./DashboardButtomComponent";
import { DashboardTopComponent } from "./DashboardTopComponent";
import { CustomGetUseQueryExtra } from "../../customHook/CustomGetUseQueryExtra";
import html from '../../../assets/image/3.jpg'

export const Dashboard = () => {

  const {data} = CustomGetUseQueryExtra('getFavoriteCourse',`/SharePanel/GetMyFavoriteCourses`)
  

  const Data2 = [
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


  // const getProfile = async() => {
  //   const res= await http.get('/SharePanel/GetProfileInfo')
  //   return res
  // }

  // const {data } = useQuery('myProfile' , getProfile)
  

  return (
    <div className="bg-white 2xl:w-[72rem] dark:bg-violet-950  dark:text-violet-200">
      <DashboardTopComponent/>
      <div className="flex md:flex-row justify-center gap-5 flex-col text-xs mt-10 ">
        <div className="">
          <h2 className="flex text-2xl mb-5 text-fuchsia-700 font-bold dark:text-violet-200">ـ اخری دوره ثبت شده</h2>
          <div className="w-[97%]">
            {Data2?.map((result, index) => {
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
          <h2 className="flex text-2xl mb-5 text-fuchsia-700 font-bold dark:text-violet-200">ـ دوره های پیشنهادی</h2>
          <div className="w-[97%]">
            {Data2?.map((result, index) => {
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
