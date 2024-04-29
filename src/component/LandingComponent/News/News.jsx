import CardNews from "./CardNews";
import card1 from "../../../assets/image/N2.png"
import card2 from "../../../assets/image/N1.png"

const News = () => {
    return(
        <>
            <div>
                <div className="mb-5 mt-10 flex w-full flex-col items-center text-end text-lg">
                        <span className="block w-36 text-2xl text-indigo-900">اخبار و مقالات </span>
                        <span className="block w-36 bg-gradient-to-l from-violet-900 to-transparent py-[2px]"></span>
                </div>
                <div className="flex w-[95%] flex-col lg:flex-row lg:justify-center">
                    <CardNews image={card2} />
                    <CardNews  image={card1}/>
                </div>
                <div className="relative h-32 w-full">
                    <button type="submit" className="absolute inset-0 right-40 mb-20 h-16 w-36 rounded-lg bg-blue-700 px-4 py-1 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:right-[35rem] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> نمایش بیشنر</button>
                </div>
            </div>
        </>
    )
}

export default News;