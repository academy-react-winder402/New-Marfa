export const DashboardTopComponent = () => {
  return (
    <>
      <div className=" relative flex justify-between flex-wrap flex-row  gap-5 border-2 border-slate-400 rounded-lg m-3 p-5">
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500">
          نام و نام خانوادگی :
          <span className="text-fuchsia-700"> بیتا قنبری </span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500">
          تاریخ تولد :<span className="text-fuchsia-700">1402/03/26</span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500">
          شماره همراه :<span className="text-fuchsia-700">09031129980</span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500">
          شماره ملی :<span className="text-fuchsia-700">123456890</span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500">
          ایمیل :
          <span className="text-fuchsia-700">bitaghanbari@gmail.com</span>
        </div>

        <div className="  w-full md:w-[45%] lg:w-[30%]">
          <button className="text-fuchsia-700 absolute left-0 bottom-0 h-[2rem] border-2 rounded-tr-lg border-slate-400 rounded-bl-lg align-middle text-center px-5 py-1 mb-[-1px] ml-[-1px]">
            ویرایش
          </button>
        </div>
      </div>
    </>
  );
};
